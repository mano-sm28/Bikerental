import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlog',
  templateUrl: './adminlog.component.html',
  styleUrls: ['./adminlog.component.css']
})
export class AdminlogComponent implements OnInit {

  constructor(private route:Router) { }
  click(data) {
    console.log(data.user);
    this.route.navigateByUrl(' display');
}
  ngOnInit() {
  }

}
