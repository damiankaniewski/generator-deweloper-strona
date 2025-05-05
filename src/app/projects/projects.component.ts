import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Project {
  name: string;
  description: string;
  link: string;
  images: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Project[]>('assets/projects.json').subscribe({
      next: (data) => {
        this.projects = data.map((project) => ({
          ...project,
          images: [...project.images], // kopiujemy tablicę, żeby rotacja nie wpłynęła na oryginał
        }));

        setInterval(() => this.rotateImages(), 5000);
      },
      error: (err) => {
        console.error('❌ Błąd ładowania pliku projects.json:', err);
      },
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
}
