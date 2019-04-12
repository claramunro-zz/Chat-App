import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { Alert } from './../classes/alert';
import { AlertService } from './alert.service';
import { Observable, of } from 'rxjs';
import { AlertType } from './../enums/alert-type.enum';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestoreDocument } from '@angular/fire/firestore';
import 'rxjs/add/observable/of';
import { switchMap } from 'rxjs/operators';



@Injectable()
export class AuthService {

  public currentUser: Observable<User | null>;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private afAuth: AngularFireAuth,
    private db: AngularFirestoreModule
  ) {


    this.currentUser = this.afAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.db.fromRef<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null)
      }

    }));

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
