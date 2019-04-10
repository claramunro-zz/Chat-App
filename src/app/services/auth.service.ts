import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { Alert } from './../classes/alert';
import { AlertService } from './alert.service';
import { Observable } from 'rxjs';
import { AlertType } from './../enums/alert-type.enum';
import { of } from 'rxjs';


@Injectable()
export class AuthService {

  public currentUser: Observable<User | null>;

  constructor(
    private router: Router,
    private alertService: AlertService
  ) {
    // TODO connect user from Firebase to backend & set user
    this.currentUser = of();
  }

  public signup(firstName: string, lastName: string, email: string, password: string): Observable<boolean> {
   return of(true);
    }


  public login(email: string, password: string): Observable<boolean> {
   return of(true); 
  }

  public logout(): void {
    // TODO call Firebase logout function
      this.router.navigate(['/login']);
      this.alertService.alerts.next(new Alert('You have been signed out.', AlertType.Success));
  }

}
