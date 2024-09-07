import { Component, Input, OnInit } from '@angular/core';
import { ISkills } from '../../interfaces/ISkills.inteface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent{
  @Input()
  public skill: ISkills = {
    skillIcon: '',
    nameSkill: ''
  };


}
