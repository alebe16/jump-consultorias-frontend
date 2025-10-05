import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ConsultoriasComponent } from './pages/consultorias/consultorias.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'consultorias', component: ConsultoriasComponent },
    { path: '**', redirectTo: '' }

];
