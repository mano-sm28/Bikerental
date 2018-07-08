import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private http: Http,public route:Router) { }
  click(obj) {
    if (obj._id==""||obj.pass=="") {
      alert("please check your details");
      this.route.navigateByUrl('/userlogin');
     }
    else {
      localStorage.setItem('useremail', obj._id);
      //alert(JSON.stringify(obj));
      this.http.post("http://localhost:4000/userdetails", obj).subscribe(res => {
        console.log(res.json())
      });
      alert("Login successful");
      this.route.navigateByUrl('/booking');
    }
  }
  ngOnInit() {
  }

}
