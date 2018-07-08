import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public http:Http,public route:Router) { }
  SelectedFile: File = null;  
  onFileSelected(event) {
    this.SelectedFile = <File>event.target.files[0];
    console.log(this.SelectedFile)
  }
  fname="";
  _id = "";
  mob = "";
  pass = "";
  address = "";
  adminreg(obj) {
    if (obj.fname == "" || obj._id == "" || obj.mob == "" || obj.pass == "" || obj.address == "" || obj.conpass == "") {
      alert("please enter all the fields");
      this.route.navigateByUrl('/signup');
    }

    else {
      if (obj.pass == obj.compass) {
        alert("please enter all the fields");
        this.route.navigateByUrl('/signup');
      }
      else {
        const fd = new FormData();
        fd.append('photo', this.SelectedFile, this.SelectedFile.name);
        fd.append('fname', this.fname);
        fd.append('_id', this._id);
        fd.append('mob', this.mob);
        fd.append('pass', this.pass);
        fd.append('address', this.address);
        this.http.post("http://localhost:4000/admin", fd).subscribe(res => {
          console.log(res.json())
        });
        alert("Registration successful");
        this.route.navigateByUrl('login');
      }
    }
  }  
  ngOnInit() {  }

}
