import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
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
import {ReactiveFormsModule} from "@angular/forms";
import { DemoComponent } from './demo/demo.component';
import { PracComponent } from './prac/prac.component';
import { BoxComponent } from './box/box.component';
import { NewdirComponent } from './newdir/newdir.component';
import { ErrorcompComponent } from './errorcomp/errorcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    NewdirDirective,
    PracDirective,
    NavbarComponent,
     FormComponent,
     DemoComponent,
     PracComponent,
     BoxComponent,
     NewdirComponent,
     ErrorcompComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [VsService, PracService],
  bootstrap: [AppComponent]
})
export class AppModule { }
