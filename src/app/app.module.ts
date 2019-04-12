import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap';
import { NgxLoadingModule } from 'ngx-loading';

// version diff trying to figure out which I want to use

import { environment } from '../environments/environment';
// import { AngularFirestore} from '@angular/fire/firestore';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireStorageModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }  from '@angular/forms';

import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatInputComponent } from './pages/chat/components/chat-input/chat-input.component';
import { ChatroomListComponent } from './pages/chat/components/chatroom-list/chatroom-list.component';
import { ChatroomTitleBarComponent } from './pages/chat/components/chatroom-title-bar/chatroom-title-bar.component';
import { ChatMessageComponent } from './pages/chat/components/chat-message/chat-message.component';
import { ChatroomWindowComponent } from './pages/chat/components/chatroom-window/chatroom-window.component';
import { LoadingService } from './servies/loading.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ChatComponent,
    NavbarComponent,
    ChatInputComponent,
    ChatroomListComponent,
    ChatroomTitleBarComponent,
    ChatMessageComponent,
    ChatroomWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AlertModule.forRoot(),
    NgxLoadingModule
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    // AngularFireStorageModule,
    // AngularFireAuthModule
  ],
  providers: [
    AlertService,
    AlertModule,
    LoadingService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
