import { Component, Injectable, NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListServiceService } from './list-service.service';


@Injectable({ providedIn: 'root' })
export class PermissionsService {

  constructor( private listService :  ListServiceService){
  }

  isLogged() {
    return this.listService.logged;
  }
}

@Injectable({ providedIn: 'root' })
export class IsLoginGuard implements CanActivate {
  private permission = inject(PermissionsService);
  constructor( private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
      if(!this.permission.isLogged()) {
        this.router.navigate(['/login']);
      }
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
