import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newdir',
  templateUrl: './newdir.component.html',
  styleUrls: ['./newdir.component.css']
})
export class NewdirComponent implements OnInit {
  places: string[] = ["Chennai", "Mumnbai", "Bangalore"];
  NotFade: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  fade(){
    this.NotFade = !this.NotFade;
  }

}
