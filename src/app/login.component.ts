import { Component  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppService } from './app.service';
import {MdRadioModule} from '@angular/material';
import {Router} from '@angular/router';

//second component where we have to enter EMAIL and press Enter test button
// enter test button will route to new component which have the Q/A of actual test .

@Component({
  selector: 'app-login',
  template: `
             <br>
             <nav>
             
             <div  class="container  box-sticker">
              <br>
              <br>  
              <div class="imgcontainer">
              <img src="assets/img_avatar2.png"  class="img-circle img-responsive image-set" alt="Cinque Terre" width="304" height="236">
              </div>
              <br>
             <div class="loginbuttonstyle ,col-sm-4">
              <div class="form-group">
              <label class="headingstyle">Enter Your Email :</label>
              <div>
              <input type="text" class="form-control" id="email" [(ngModel)]="email" placeholder="Your Email.."> 
              </div>
              </div>
              <br>
              <br>
              <br>
              <div>
              <h2 style="color:red" [innerHtml]="htmlToAdd"></h2>
              </div>
              <button type="button" class="btn btn-primary btn-lg" (click)="validate()" >Enter Test</button>
              <br>
              <br>
              </div>
             

             </div>
             </nav>
            `
        })
export class LoginComponent  {
  title = 'Personality Test';
  email : string ;
  htmlToAdd : string ;

   
constructor(private router:Router){}

   validateEmail(email){
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
     }
 


    validate(){

    console.log(this.email);
    if(this.email == null || this.email == undefined || this.email == ' '){
     this.htmlToAdd =  "Email cannot be empty"; 
    } 
   else{
    if(this.validateEmail(this.email)){
       this.router.navigate(['/testDetails',this.email] , { skipLocationChange: true });
    } 
    else{
    this.htmlToAdd =  this.email+" is not a valid Email";
     }
   } 
    return false ;
      
   }

}
