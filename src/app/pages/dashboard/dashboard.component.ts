import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  servicios: any[] = [];
  loading = true;

  constructor(private sService: ServiceService) {}

  ngOnInit() {
    this.sService.listarServicios().subscribe({
      next: (res: any) => { this.servicios = res; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
