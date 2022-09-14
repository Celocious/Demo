import { ErrorcompComponent } from './errorcomp/errorcomp.component';
import { BoxComponent } from './box/box.component';
import { PracComponent } from './prac/prac.component';
import { DemoComponent } from './demo/demo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewdirComponent } from './newdir/newdir.component';

const routes: Routes = [
  {path:"comp1", component: DemoComponent},
  {path:"comp2", component: PracComponent},
  {path:"comp3", component: BoxComponent},
  {path:"comp4", component:NewdirComponent},
  {path:`**`, component:ErrorcompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [PracComponent, DemoComponent, BoxComponent, NewdirComponent, ErrorcompComponent]
