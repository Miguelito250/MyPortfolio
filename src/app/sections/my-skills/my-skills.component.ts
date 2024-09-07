import { Component } from '@angular/core';
import { SkillsComponent } from "../../shared/components/skills/skills.component";
import { HorizontalCardComponent } from "../../shared/components/horizontal-card/horizontal-card.component";

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [SkillsComponent, HorizontalCardComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

}
