import { Component } from '@angular/core';
import { HorizontalCardComponent } from '../../shared/components/horizontal-card/horizontal-card.component';
import { ISkills } from '../../shared/interfaces/ISkills.inteface';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [HorizontalCardComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  public mySkills: ISkills[] = [
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
    {
      skillIcon: 'devicon-git-plain colored',
      nameSkill: 'Git',
    },
    {
      skillIcon: 'devicon-cypressio-plain',
      nameSkill: 'Cypress',
    },
    { skillIcon: 'devicon-csharp-plain colored', nameSkill: 'C#' },
    { skillIcon: 'devicon-php-plain colored', nameSkill: 'PHP' },
    { skillIcon: 'devicon-java-plain colored', nameSkill: 'Java' },
    {
      skillIcon: 'devicon-azuresqldatabase-plain colored',
      nameSkill: 'SQL',
    },
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
      skillIcon: 'devicon-laravel-plain',
      nameSkill: 'Laravel',
    },
  ];
}
