import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFound404Component } from './components/page-not-found404/page-not-found404.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/auth.guard';
import { OppositeAuthGuard } from './services/opposite-auth.guard';


const routes: Routes = [
  { path:'', redirectTo:'/dashboard',pathMatch: 'full' },
  { path:'signup', component:SignupComponent,canActivate: [AuthGuard]},
  { path:'dashboard', component: DashboardComponent,canActivate: [OppositeAuthGuard]},
  { path: '**',component: PageNotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
