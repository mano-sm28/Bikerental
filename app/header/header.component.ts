import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router"; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(public route:Router,public http:Http) { }

  bikes(bike) {
    console.log(bike);
     this.http.post("http://localhost:4000/bikes", bike).subscribe(res => {
       console.log(res.json());  
       if (res.json()) {
        this.route.navigateByUrl('/');
         this.route.navigateByUrl('/display');
       }
       else
         alert("Bikes are not available");
     })
  
  } ngOnInit() {
  }

}
