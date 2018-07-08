import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-fgtpass',
  templateUrl: './fgtpass.component.html',
  styleUrls: ['./fgtpass.component.css']
})
export class FgtpassComponent implements OnInit {

  constructor(private http:Http) { }
  forgot(email) {
    console.log(email);
    this.http.get("http://localhost:3000/forget?email=" +email._id).subscribe(res => { 
      console.log(res);
    })
}
otpchk(otp) {
  console.log(otp);
  this.http.get("http://localhost:3000/otp?otp=" +otp.otp).subscribe(res => { 
    console.log(res);
  })
}

  

  ngOnInit() {
  }

}
