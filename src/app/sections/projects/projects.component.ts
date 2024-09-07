import { Component } from '@angular/core';
import { VerticalCardComponent } from "../../shared/components/vertical-card/vertical-card.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [VerticalCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
