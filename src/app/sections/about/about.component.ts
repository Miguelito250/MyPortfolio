import { Component } from '@angular/core';
import { SkillsComponent } from '../../shared/components/skills/skills.component';
import { ISkills } from '../../shared/interfaces/ISkills.inteface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public listKeySkills: ISkills[];

  constructor(){
    this.listKeySkills = [
      {
        skillIcon: 'devicon-html5-plain colored',
        nameSkill: 'HTML5',
      },
      {
        skillIcon: 'devicon-css3-plain colored',
        nameSkill: 'CSS3',
      },
      {
        skillIcon: 'devicon-angularjs-plain colored ',
        nameSkill: 'Angular',
      },
      {
        skillIcon: 'devicon-dotnetcore-plain colored',
        nameSkill: '.NET',
      },
      {
        skillIcon: 'devicon-java-plain',
        nameSkill: 'Java',
      },
      {
        skillIcon: 'devicon-laravel-plain',
        nameSkill: 'Laravel',
      },

    ]
  }
}
