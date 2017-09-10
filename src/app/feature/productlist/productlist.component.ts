import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  searchText:string="";
  products:any[];
  loadproduct():void{
    this.products=[{'productname':'A'},{'productname':'B'},{'productname':'C'},{'productname':'D'}]
  }
  constructor() { }

  ngOnInit() {
  }

}
