import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    video:string = 'WdGxRbA1dRs';
  nombre: String = 'CarLos AuGusto flORES valERIo';
  textoPrueba: String = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra erat et porttitor dignissim. Proin pharetra auctor eros, sed aliquam quam blandit sit amet. Ut lorem neque, fringilla a varius eu, pellentesque id nisl. Sed lectus metus, aliquam ut ultricies non, ultricies rutrum elit. Vivamus et pellentesque enim, eget posuere sapien. Vivamus ullamcorper aliquam massa sed pellentesque. Aenean orci nisl, blandit id velit in, malesuada consectetur nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vel semper elit.';
  nombres: String[] = [ 'carlos' , 'tania' , 'kenya' , 'kain' ];
  pi: Number = 3.1415134586;
  heroe = {
    nombre: 'SpiderMan',
    alterego: 'Peter Parker'
  };
 fecha = new Date();
 checked: boolean;



}
