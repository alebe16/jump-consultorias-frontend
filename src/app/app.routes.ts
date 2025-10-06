import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ConsultoriasComponent } from './pages/consultorias/consultorias.component';
import { FinancieraComponent } from './pages/financiera/financiera.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { InventariosComponent } from './pages/inventarios/inventarios.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'consultorias', component: ConsultoriasComponent },
    { path: 'financiera', component: FinancieraComponent },
    { path: 'marketing', component: MarketingComponent },
    { path: 'inventarios', component: InventariosComponent },
    { path: '**', redirectTo: '**', pathMatch: 'full' }

];
