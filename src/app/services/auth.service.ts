import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/auth`;
  private tokenKey = 'app_token';
  private userKey = 'app_user';

  constructor(private http: HttpClient) {}

  register(payload: any) {
    return this.http.post(`${environment.apiUrl}/users`, payload);
  }

  login(correo: string, password: string): Observable<any> {
    const credentials = { correo, password };
    return this.http.post<{ token: string; user: any }>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(res => {
          if (res?.token) {
            localStorage.setItem(this.tokenKey, res.token);
            localStorage.setItem(this.userKey, JSON.stringify(res.user));
          }
        })
      );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser() {
    const s = localStorage.getItem(this.userKey);
    return s ? JSON.parse(s) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
