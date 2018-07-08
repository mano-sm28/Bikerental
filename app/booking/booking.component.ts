import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bikid; emailmsg; email;
  constructor(private http:Http,public route:Router) { }
book(data){
  data = {
    start: data.start,
    end: data.end,
    bikeid: this.bikid,
    email:this.email    
  }
  this.emailmsg={
    email: this.email
  }
  this.route.navigateByUrl('/profile');
  this.http.get("http://localhost:4000/mail",this.emailmsg).subscribe(res=>{
    console.log(res);
    this.route.navigateByUrl('/profile');    
  });
  this.http.post("http://localhost:4000/book",data).subscribe(res=>{
    console.log(res);
    alert("");    
    
  });
}
  ngOnInit() {
    this.bikid = localStorage.getItem('bikeid');
    this.email = localStorage.getItem('owneremail'); 
    console.log(localStorage.getItem('owneremail'));
  }

}
