import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  phrases = [
    "¡Hola Mundo!",
    "El código limpio es fácil de leer y mantener.",
    "Programar es convertir ideas en realidad."
  ];
}
