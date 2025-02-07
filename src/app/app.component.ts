import * as AOS from 'aos';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isPrivacyPolicyPage = false;

  constructor(private router: Router) {}

  ngOnInit() {
    AOS.init();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const navigationEvent = event as NavigationEnd;

        this.isPrivacyPolicyPage =
          navigationEvent.urlAfterRedirects === '/polityka-prywatnosci';
      });
  }
}
