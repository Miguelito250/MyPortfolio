import { Component, Input } from '@angular/core';
import { ISkills } from '../../interfaces/ISkills.inteface';

@Component({
  selector: 'app-horizontal-card',
  standalone: true,
  imports: [],
  templateUrl: './horizontal-card.component.html',
  styleUrl: './horizontal-card.component.scss'
})
export class HorizontalCardComponent {
  @Input()
  public skill: ISkills;

  constructor(){
    this.skill = {
      skillIcon: "SIN ICONO",
      nameSkill: "SIN NOMBRE"
    }
  }

}
