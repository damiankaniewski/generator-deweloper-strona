import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get('assets/projects.json').subscribe((data: any) => {
      this.projects = data;

      setInterval(() => {
        this.projects.forEach((project) => {
          const firstImage = project.images.shift();
          project.images.push(firstImage);
        });
      }, 5000);
    });
  }

  navigateTo(link: string): void {
    this.router.navigate([link]);
  }
}
