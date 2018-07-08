import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
const fd:any = new FormData();
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  constructor(private http:Http,public route:Router) { }
  // SelectedFile: File = null;    
  // onFileSelected(event) {
  //   this.SelectedFile = <File>event.target.files[0];
  //   console.log(this.SelectedFile)
    
  // }
  
  user(obj) {
    // fd.append('photo', this.SelectedFile, this.SelectedFile.name);
    // alert(JSON.stringify(obj));
    this.http.post("http://localhost:4000/user",obj).subscribe(res => {
      console.log(res.json())
    });
    this.route.navigateByUrl('userlogin');
  }

  ngOnInit() {
  }

}
