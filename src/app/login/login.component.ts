import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { 
   }

  ngOnInit() {
  }
  model: any ={};
  onSubmit(){
    alert('SUCCESS!!:-)\n\n' +JSON.stringify(this.model))
  }
  
}
