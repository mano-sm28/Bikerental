 // fun(eve:FileList) {
import { Component,Inject, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { MatCardModule } from '@angular/material';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',  
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  b = "";
  val:any = "";
  bid :any= "";
  constructor(public dialog: MatDialog, public http: Http, public route: Router) { this.ngOnInit(); }
  pop(bike) {
    alert(JSON.stringify(bike));
    this.bid = {
      bikeid: bike.bid
    };
  
    this.http.post("http://localhost:4000/bikes", this.bid).subscribe(res => {
      this.val = res.json();
      console.log(this.val);
      let num = this.val.length;
      localStorage.setItem('bikeid', bike.bid);
      console.log(num);
       while ( num >=0) {
        console.log(this.val[0].bikeid);
        num--;
      }
    });
      this.route.navigateByUrl('/userlogin');
  }
  ngOnInit() {
    this.http.post("http://localhost:4000/view",this.b).subscribe(res => {
      this.b = res.json();
      console.log(this.b);
    });
  }
}
  