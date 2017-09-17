import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-massupload',
  templateUrl: './massupload.component.html',
  styleUrls: ['./massupload.component.css']
})
export class MassuploadComponent implements OnInit {
  fileuploadstatus:string;
  constructor() { }
  filechange(){
    this.fileuploadstatus="Uploaded Sucessfully";
  }
  ngOnInit() {
  }

}
