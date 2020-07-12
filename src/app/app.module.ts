import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'add', component: LoginComponent }
];

@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  providers: [UserService],
  declarations: [ AppComponent, HelloComponent, LoginComponent, ListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
