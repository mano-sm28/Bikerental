import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//import {Router} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // router:Router
  constructor(private http:Http) { }
  bike(bname) {
    console.log(bname);
    //this.router.navigate(['login']); 
  }
    
  formControlValue = '';

  findChoices(searchText: string) {
    return ['Pulsar 220','Pulsar 250','Pulsar 150','Pulsar 180','Duke','KTM Suzuki','fz','royal enfield','glamour',
    'scooty','honda shine'].filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  getChoiceLabel(choice: string) {
    return `@${choice} `;
  }
  ngOnInit() {
  }
}
