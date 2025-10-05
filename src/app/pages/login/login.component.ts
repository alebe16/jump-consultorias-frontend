import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  message = '';
  errorMessage: string | undefined;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      correo: this.fb.control('', { validators: [Validators.required, Validators.email], nonNullable: true }),
      password: this.fb.control('', { validators: [Validators.required], nonNullable: true })
    });
  }

  submit() {
    if (this.form.valid) {
      const { correo, password } = this.form.getRawValue();

      this.auth.login(correo, password).subscribe({
        next: (res: { token: string }) => {
          console.log('Login correcto:', res);
          localStorage.setItem('token', res.token);
          alert('Login exitoso!');
          this.router.navigate(['/home']); 
        },
        error: (err: any) => {
          console.error('Error en login:', err);
          this.errorMessage = err.error?.error || 'Error en login';
        }
      });
    }
  }
}
