import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  //caso usuario nao entre pela sua url ele será direcionado para...
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'amdin', component: AdminComponent},
  { path: 'login', component: LoginComponent},
  { path: 'quem-somos', component: QuemSomosComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'detalhes/:id', component: DetalhesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
