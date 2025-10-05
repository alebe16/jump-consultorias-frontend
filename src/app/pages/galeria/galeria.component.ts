import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Imagen {
  id: number;
  src: string;
  titulo: string;
  autor: string;
  categoria: string;
  descripcion: string;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  imagenes: Imagen[] = [
    { id: 1, src: 'assets/d1.png', titulo: 'Asesoría Legal', autor: 'Alejandra', categoria: 'legal', descripcion: 'Asistencia legal para emprendedores.' },
    { id: 2, src: 'assets/d2.png', titulo: 'Contabilidad', autor: 'Carlos', categoria: 'finanzas', descripcion: 'Gestión contable para tu negocio.' },
    { id: 3, src: 'assets/manos-sosteniendo-el-concepto-de-redes-sociales-de-telefonos-inteligentes.jpg', titulo: 'Marketing Digital', autor: 'Juan', categoria: 'marketing', descripcion: 'Estrategias de redes sociales.' },
    { id: 4, src: 'assets/gente-de-negocios-dandose-la-mano.png', titulo: 'Consultoría Empresarial', autor: 'Laura', categoria: 'legal', descripcion: 'Soporte en procesos legales y alianzas.' },
    { id: 5, src: 'assets/primer-plano-de-mujer-de-negocios-ocupada.jpg', titulo: 'Optimización de Recursos', autor: 'Camila', categoria: 'finanzas', descripcion: 'Mejora en la gestión del tiempo y recursos.' }
  ];
}
