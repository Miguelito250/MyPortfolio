import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AboutComponent } from './sections/about/about.component';
import { HomeComponent } from './sections/home/home.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { MySkillsComponent } from './sections/my-skills/my-skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    MySkillsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'MyPortfolio';
}
