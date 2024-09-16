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
  public myProjects: IProjects[] = [
    {
      urlImg: [],
      nameProject: 'Wikipedia',
      Description:'Proyecto educativo para una persona tercera, fué desarrollado con Java JPA con N capas y desplegado en una maquina virtual VBox, cuenta con persistencia de datos hasta que se cierra la aplicación'
    }
  ]
}

interface IProjects{
  urlImg: string[],
  nameProject: string,
  Description: string,
  urlWeb?: string,
}
