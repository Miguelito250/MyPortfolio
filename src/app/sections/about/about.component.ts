import { Component } from '@angular/core';
import { ISkills } from '../../shared/interfaces/ISkills.inteface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public listKeySkills: ISkills[];

  constructor(){
    this.listKeySkills = [
      

    ]
  }
}
