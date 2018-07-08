import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bikeupload',
  templateUrl: './bikeupload.component.html',
  styleUrls: ['./bikeupload.component.css']
})
export class BikeuploadComponent implements OnInit {

  SelectedFile: File = null;    
  constructor(public http:Http,public route:Router) { }
  onFileSelected(event) {
    this.SelectedFile = <File>event.target.files[0];
    console.log(this.SelectedFile)
    
  }
  name = "";
  bname = "";
  bno = "";
  bmodel = "";
  address = "";
  price = "";
  cbook = "";
  email = "";
  bikeupload(data) {
    this.email = localStorage.getItem('owneremail')
    console.log(this.email);
    const fd = new FormData();
    fd.append('name', this.name);
    fd.append('photo', this.SelectedFile, this.SelectedFile.name);
    fd.append('bname', this.bname);
    fd.append('bno',this.bno);
    fd.append('bmodel',this.bmodel);
    fd.append('address',this.address); 
    fd.append('price',this.price);
    fd.append('cbook', this.cbook);
    fd.append('email', this.email);
    this.route.navigateByUrl('/profile');
    console.log(fd);
    this.http.post("http://localhost:4000/addbike",fd).subscribe(res => { 
      console.log(JSON.stringify(res));
      
    }) 
    // alert("your bike is added.You will get mail in few seconds");
    // this.route.navigateByUrl('/profile');
  }
  ngOnInit() {
  }

}
