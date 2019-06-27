import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeData = [
    {"name": 'Saritha Rani', "location": 'Hyderabad', "designation" :'fullstack'},
    {"name": 'Dawath kumari', "location": 'Hi-tech City,Hyd', "designation" :'web development'},
    {"name": 'Savithri kumari', "location": 'Gachibowli,hyd', "designation" :'java dev'},
    {"name": 'Prathyusha', "location": 'Madhapur,hyd', "designation" :'full stack mean'},
    {"name": 'Varnika', "location": 'Nizamabad', "designation" :'python dev'},
    {"name": 'Srinu', "location": 'Nzb Urban', "designation" :'mainframes dev'},
    {"name": 'User68', "location": 'Suchitra Hyd', "designation" :'.net dev'}];
}


