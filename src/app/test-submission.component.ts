import { Component  } from '@angular/core';
import {Router} from '@angular/router';


@Component({
     selector: 'app-submit',
     template:`
     <div class="row ">
               <div  class="background-image box-sticker col-sm-12 fill">
                 <h2><span class="headingstyle">Thanks For Completing the Test:<br />We will find a match for you based on your personality</span></h2>
                </div>
                </div>
                <div class="actionButtons">
                <button (click)="goHome()" class="btn btn-primary btn-lg">Home</button>
                </div>
               `
})

export class TestSubmitComponent  {

constructor( private router:Router){}
goHome(){
  this.router.navigate(['/login'] , { skipLocationChange: true });
}

}