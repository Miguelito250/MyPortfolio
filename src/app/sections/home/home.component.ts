import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  public myImg: string = 'https://lh3.googleusercontent.com/a/ACg8ocLKrA-LVsWaTRFe5OuGPo9EsmILT9wjGzYIwINdL_pyi06Rl7QP=s360-c-no'
}
