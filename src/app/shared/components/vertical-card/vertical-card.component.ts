import { Component, Input } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.interface';

@Component({
  selector: 'app-vertical-card',
  standalone: true,
  imports: [],
  templateUrl: './vertical-card.component.html',
  styleUrl: './vertical-card.component.scss'
})
export class VerticalCardComponent {
  @Input()
  public project: IProjects;
  
  constructor(){
    this.project = {
      urlImg: [],
      nameProject: "NO HAY NOMBRE",
      description: "SIN DESCRIPCION"
    }
  }
}
