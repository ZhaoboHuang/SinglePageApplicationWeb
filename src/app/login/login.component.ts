import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
//import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
//import { FormControl, Validators } from '@angular/forms';
import { AuthService } from'../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private Auth: AuthService)  { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.Auth.getUserDetails(username, password)
    console.log(username,password)
  }
 
 
 
 
  model: any ={};
  onSubmit(){
    alert('SUCCESS!!:-)\n\n' +JSON.stringify(this.model))
  }
  
}
