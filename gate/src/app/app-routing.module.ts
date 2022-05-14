import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewayComponent } from './components/gateway/gateway.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'' , redirectTo:'login' ,pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'gateway' , component:GatewayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
