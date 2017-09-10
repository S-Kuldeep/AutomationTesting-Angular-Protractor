import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sportproduct',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class SportproductComponent implements OnInit {
  title:string="Hello I am in my first page";
  username:string="";
  password:string="";
  constructor(private _router:Router){

  }
  login():void{
    this._router.navigate(["/home"]);
  }
  ngOnInit() {
  }

}
