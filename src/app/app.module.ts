import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
// import { MaterializeModule } from "angular2-materialize";

import { AuthGuard } from './guards/auth.guard.service';
import { DataService } from './data-service.service';
import { LoginService } from './login/login.service';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';
import { CatalogComponent } from './catalog/catalog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficoModule } from "app/grafico/grafico.module";

export const environmentFireBase = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCa4BK8mag9_ZfiSWkt-nL42cXEv9wSGHs",
    authDomain: "mercurio-15ff2.firebaseapp.com",
    databaseURL: "https://mercurio-15ff2.firebaseio.com",
    projectId: "mercurio-15ff2",
    storageBucket: "mercurio-15ff2.appspot.com",
    messagingSenderId: "1007398979159"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CatalogComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environmentFireBase.firebase),
    GraficoModule
    // MaterializeModule
  ],
  providers: [
    LoginService, 
    DataService,
    AuthGuard,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
