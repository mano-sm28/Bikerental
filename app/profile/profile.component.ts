import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public http:Http) { }
  userimg="https://lh3.googleusercontent.com/hq6fDtAy6DCc1vxqZvymYsHpBkIHA6oHbHi3CUO4_o7uSlSHmAJ7Q5UyhifkxNHxLyUpYoBIqKo-4A7FWXipTCTMwCdLZrbdYAZvr6rdkaKzYUP9D0DQjy6NrqF2rbI3pwyiHJ-ZJXqaO9grNyzqIRbwegy8LwTR1fkqce5QgmEmV78imFbvy8ApKoTRjY9m8W7e8sqF6TJR6jwcu1dszP3P-3UK8h5y9lyOBIAmD8K871T0TPNF_anrCLJXQhMwACfXGh2sAkrGqqTxn50I2bzRyQbANLppy9xioqxJPpT5TvHhGpRWb-y5LhWWB-Q9ccLpJAZE7CppvgZcOCj-DDo3vgHP9C7un1e0p3QyjQKpcEw5PMp9clH3Jg2oZq1oCg8AaegNITWaeMyYJT01krLuYU3r7jklWk0FoWwQwTiryinrwSb2xPcGcDslgP0UXE6YM3OGowH9lb_uRPRnEJZG9vwKFrmJ6VZeVyuk53HekhZ446S_AJGN5NndhLkCGLquG-OjsfG5eEtwXMUtxdNlkKBLVfZCUy8Owk5rDP-TipCphFaOQecWsPSnBXq6ocXhfEQCYHKjCcz3SH5F2ODt3slS2MZqfTY5x4M=w1163-h654-no";
  username="yashu";
  phnum="9542736477";
  address="address";
  pro = {
 email:localStorage.getItem('owneremail')  
  }
  res: any; 
  ngOnInit() {
    this.http.post("http://localhost:4000/profile",this.pro).subscribe(res => {
      this.res = res.json();
      this.username = this.res[0].fname;
      this.phnum = this.res[0].mob;
      this.address = this.res[0].address;
      this.userimg=this.res[0].path;
      console.log(this.res[0].fname, this.username);
    });
  }
}
