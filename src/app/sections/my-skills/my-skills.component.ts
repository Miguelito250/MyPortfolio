import { Component } from '@angular/core';
import { SkillsComponent } from '../../shared/components/skills/skills.component';
import { HorizontalCardComponent } from '../../shared/components/horizontal-card/horizontal-card.component';
import { IMySkills } from '../../shared/interfaces/IMySkills.interface';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [SkillsComponent, HorizontalCardComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  public specialty: string = 'Frontend';
  public mySkills: IMySkills[] = [
    {
      specialty: 'Frontend',
      skills: [
        {
          skillIcon: 'devicon-tailwindcss-original colored',
          nameSkill: 'TailwindCSS',
        },
        {
          skillIcon: 'devicon-bootstrap-plain colored',
          nameSkill: 'Bootstrap',
        },
        {
          skillIcon: 'devicon-javascript-plain colored',
          nameSkill: 'JavaScript',
        },
        {
          skillIcon: 'devicon-typescript-original colored',
          nameSkill: 'TypesScript',
        },
      ],
    },
    {
      specialty: 'Backend',
      skills: [
        { skillIcon: 'devicon-csharp-plain colored', nameSkill: 'C#' },
        { skillIcon: 'devicon-php-plain colored', nameSkill: 'PHP' },
        { skillIcon: 'devicon-java-plain colored', nameSkill: 'Java' },
        {
          skillIcon: 'devicon-azuresqldatabase-plain colored',
          nameSkill: 'SQL',
        },
      ],
    },
    {
      specialty: 'Otros',
      skills: [
        {
          skillIcon: 'devicon-git-plain colored',
          nameSkill: 'GitHub',
        },
        {
          skillIcon: 'devicon-cypressio-plain',
          nameSkill: 'Cypress',
        },
      ]
    },
  ];
}
