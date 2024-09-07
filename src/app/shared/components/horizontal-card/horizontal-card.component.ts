import { Component, Input } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-horizontal-card',
  standalone: true,
  imports: [SkillsComponent],
  templateUrl: './horizontal-card.component.html',
  styleUrl: './horizontal-card.component.scss'
})
export class HorizontalCardComponent {
  @Input()
  public specialty: string = '';
  
}
