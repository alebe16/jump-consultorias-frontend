import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {

  imagenes = [ 
  { id: 1, src: 'assets/img1.png', titulo: 'Asesoría financiera', ruta: '/financiera' }, 
  { id: 2, src: 'assets/img2.png', titulo: 'Asesoría en consultoría', ruta: '/consultoria' }, 
  { id: 3, src: 'assets/img3.png', titulo: 'Asesoría en inventarios', ruta: '/inventarios' } 
  ]; 

  goBack() { 
    window.history.back(); 
  } 
}
