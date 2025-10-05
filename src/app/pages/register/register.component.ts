import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form;

  message = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit() {
    if (this.form.invalid) {
      this.message = 'Corrige los campos obligatorios';
      return;
    }
    const { nombre, correo, password } = this.form.value;
    if (!nombre || !correo || !password) {
      this.message = 'Corrige los campos obligatorios';
      return;
    }
    this.auth.register({ nombre, correo, password }).subscribe({
      next: () => {
        this.message = 'Usuario creado correctamente. Ya puedes iniciar sesión.';
        setTimeout(() => this.router.navigate(['/login']), 1200);
      },
      error: (err) => this.message = err?.error?.error || 'Error al crear usuario'
    });
  }
}
