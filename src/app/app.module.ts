import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { NewdirDirective } from './newdir.directive';
import { VsService } from './vs.service';
import { HttpClientModule } from '@angular/common/http';
import { PracDirective } from './prac.directive';
import { PracService } from './prac.service';
import { NavbarComponent } from './navbar/navbar.component';
import {MatRadioModule} from "@angular/material/radio";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NewdirDirective,
    PracDirective,
    routingComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    NgbModule,
  ],
  providers: [VsService, PracService],
  bootstrap: [AppComponent]
})
export class AppModule { }
