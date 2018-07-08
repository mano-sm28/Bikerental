import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resp; email;
  constructor(public http: Http,public route:Router, public dialog: MatDialog) { }
  ngOnInit() { }
  log(data) {
    this.email=localStorage.setItem('owneremail',data._id);
    
    console.log(data);
    this.http.post("http://localhost:4000/adminlogin", data).subscribe(res => {
      this.resp = res.json();  
      console.log(this.resp.flag);
      if (this.resp.flag == "true")
        this.route.navigateByUrl('/bikeupload');
      else { 
        alert("invalid details");
        this.route.navigateByUrl('/login');
      }  
    });
  }
  
}
  



