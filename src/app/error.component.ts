import { Component  } from '@angular/core';
import {Router} from '@angular/router';


@Component({
     selector: 'app-error',
     template:`
     <div class="row ">
               <div  class="background-image box-sticker col-sm-12 fill">
                 <h2><span class="headingstyle">SORRY !!! our Servers are busy at present:<br />Please try after sometime</span></h2>
                </div>
                </div>

               `
})

export class ErrorComponent  {

constructor( private router:Router){}


}