import { Component, OnInit } from '@angular/core';
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
    'https://lrfrc67h54.execute-api.eu-central-1.amazonaws.com/prd/get-items';
  private readonly filesApiUrl = 'https://your-api.com/get-files?folder=';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http
      .get<{ statusCode: number; body: any[] }>(this.apiUrl)
      .subscribe((response) => {
        if (response.statusCode === 200 && Array.isArray(response.body)) {
          this.projects = response.body.map((project: any) => ({
            ...project,
            images: [],
          }));

          this.projects.forEach((project) => {
            this.fetchImageLinks(project.Id).then(
              (images) => (project.images = images)
            );
          });

          setInterval(() => {
            this.projects.forEach((project) => {
              if (project.images.length > 0) {
                const firstImage = project.images.shift();
                if (firstImage) {
                  project.images.push(firstImage);
                }
              }
            });
          }, 5000);
        }
      });
  }

  private fetchImageLinks(projectId: string): Promise<string[]> {
    return this.http
      .get<{ files?: string[] }>(`${this.filesApiUrl}${projectId}`)
      .toPromise()
      .then((response) =>
        response?.files
          ? response.files.map(
              (file) =>
                `https://your-s3-bucket-url.s3.eu-central-1.amazonaws.com/${projectId}/${file}`
            )
          : []
      )
      .catch(() => []);
  }
}
