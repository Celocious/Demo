import { FormComponent } from './form/form.component';
import { ErrorcompComponent } from './errorcomp/errorcomp.component';
import { BoxComponent } from './box/box.component';
import { PracComponent } from './prac/prac.component';
import { DemoComponent } from './demo/demo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewdirComponent } from './newdir/newdir.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:"comp1", component: DemoComponent},
  {path:"comp2", component: PracComponent},
  {path:"comp3", component: BoxComponent},
  {path:"comp4", component:NewdirComponent},
  {path:"comp5", component:FormComponent},
  {path:`**`, component:ErrorcompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
