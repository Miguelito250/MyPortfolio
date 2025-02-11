import { Component } from '@angular/core';
import { VerticalCardComponent } from '../../shared/components/vertical-card/vertical-card.component';
import { IProjects } from '../../shared/interfaces/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [VerticalCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private _pachosPath: string = '../../../assets/projects/pachos/';
  public myProjects: IProjects[] = [
    {
      urlImg: [`${this._pachosPath}Informes.png`],
      nameProject: 'Pach-OS',
      description:
        'Software administrativo para una Pizzeria y Bar llamada Pachito-ché, este cuenta con sistema para registrar usuarios, compras de insumos del local, sistema de ventas descontando insumos del inventario segun una receta de producto registrada anteriormente en el sistema.',
    },
  ];
}
