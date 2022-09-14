import { VsService } from './../vs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: `./demo.component.html`,
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  x:number = 75;
  y = [
    {name:"Raju", age:45},
    {name:"Gopi", age:35},
    {name:"Ramu", age:15},
    {name:"Ravana", age:25},
    {name:"Rajesh", age:75},
    {name:"Ravi", age:47},
  ]
  inVisible:boolean = false;
  data:any;
  brand: any;
  Msg : string = "";
  Name: string = "";
  User: any = "";

  constructor(private Vserve: VsService) { 
  }

  ngOnInit(): void {
    this.Msg = this.Vserve.getData();
    this.Name = this.Vserve.getName();
    this.Vserve.getUser().toPromise().then(res=>{
      this.User = res;
    })
  }

    hideList(){
      this.inVisible = !this.inVisible
    }
}
