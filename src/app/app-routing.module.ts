import { Component, Injectable, NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@Injectable({ providedIn: 'root' })
export class PermissionsService {

  isLogged() {
    return true;
  }
}

@Injectable({ providedIn: 'root' })
export class IsLoginGuard implements CanActivate {
  private permission = inject(PermissionsService);

  canActivate(route: ActivatedRouteSnapshot) {
      return this.permission.isLogged();
  }
}

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      canActivate: [IsLoginGuard]
    },
    {
      path: 'login',
      component: LoginComponent

    }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
