import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  constructor(private http: HttpClient) {}

  listarServicios() {
    return this.http.get(`${environment.apiUrl}/servicios`);
  }

  crearServicio(payload: any) {
    return this.http.post(`${environment.apiUrl}/servicios`, payload);
  }
}
