import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Project {
  link: string;
  description: string;
  Id: string;
  name: string;
  images: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  private readonly apiUrl =
    'https://xyimp2s9s3.execute-api.eu-north-1.amazonaws.com/prd/get-items';
  private readonly filesApiUrl =
    'https://xyimp2s9s3.execute-api.eu-north-1.amazonaws.com/prd/list-files';

  constructor(private http: HttpClient, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.http
      .get<{ statusCode: number; body: string }>(this.apiUrl)
      .subscribe(async (response) => {
        if (response.statusCode === 200) {
          try {
            const parsedBody = JSON.parse(response.body);

            if (Array.isArray(parsedBody)) {
              this.projects = parsedBody
                .filter((project: any) => project.name) // Filtrujemy tylko te z "name"
                .map((project: any) => ({ ...project, images: [] }));

              for (const project of this.projects) {
                project.images = await this.fetchImageLinks(project.Id);
              }

              setInterval(() => {
                this.rotateImages();
              }, 5000);
            }
          } catch (error) {
            console.error('❌ Błąd parsowania JSON:', error);
          }
        }
      });
  }

  private rotateImages(): void {
    this.projects.forEach((project) => {
      if (project.images.length > 1) {
        const firstImage = project.images.shift();
        if (firstImage) {
          project.images.push(firstImage);
        }
      }
    });
  }

  private async fetchImageLinks(projectId: string): Promise<string[]> {
    try {
      const project = this.projects.find((p) => p.Id === projectId);
      if (!project || !project.name) return [];

      console.log(`🔄 Pobieram zdjęcia dla projektu: ${projectId}`);

      const response = await this.http
        .post<string[]>(this.filesApiUrl, { folder: projectId })
        .toPromise();

      console.log(`✅ Odpowiedź API (${projectId}):`, response);

      const fileNames = response ?? [];

      if (fileNames.length === 0) {
        console.warn(`⚠️ Brak plików dla projektu ${projectId}`);
        return [];
      }

      const baseUrl =
        'https://generator-412381761586-bucket.s3.eu-north-1.amazonaws.com/';
      const imageUrls = fileNames.map(
        (fileName) => `${baseUrl}${projectId}/${fileName}`
      );

      console.log(`📸 Zdjęcia (${projectId}):`, imageUrls);

      return imageUrls;
    } catch (error) {
      console.error(`❌ Błąd pobierania zdjęć dla ${projectId}:`, error);
      return [];
    }
  }
}
