import { Component, OnInit } from '@angular/core';
import { PracService } from '../prac.service';
@Component({
  selector: 'app-prac',
  templateUrl: './prac.component.html',
  styleUrls: ['./prac.component.css']
})
export class PracComponent implements OnInit {
 Intro:string = "World";
 num: number = 45;
 myArr = [
  {name:"Raju", age:45},
  {name:"Gopi", age:35},
  {name:"Ramu", age:15},
  {name:"Ravana", age:25},
  {name:"Rajesh", age:75},
  {name:"Ravi", age:47},
];
data:any;
inVisible: boolean = true;
brand:any = "";
details:any="";
source: any = "";

  constructor(private pracs: PracService) { }

  ngOnInit(): void {
    this.details = this.pracs.getData();
    this.pracs.getContent().toPromise().then(res=>{
      this.source = res;
    })
  }

  hideData(){
    this.inVisible = !this.inVisible;
  }
}
