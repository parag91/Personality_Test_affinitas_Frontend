import { Component  , OnInit ,ElementRef} from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppService } from './app.service';
import {MdRadioModule} from '@angular/material';
import { Location }                 from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { SelectedData } from './SelectedData' ;
// this is the  component with the test .
// this component has two button :- first button is back button  and second button is submit
// back button routes back to login screen
// submit button saves the test .

@Component({
  selector: 'test-details',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
  
})
export class TestDetailComponent implements OnInit{
  title = 'Personality Test';
   navigator : boolean ;
   navItems: any ;
   navItemsCategory : any ;
   questions : any[] ;
   selectedData : SelectedData[] = [];
   email:string;
   htmlToAddOnSubmit:string;
   public button1 : string ;
  constructor(private _appService: AppService , private location: Location , private route:ActivatedRoute , private router:Router , private elRef: ElementRef  ){} 


  ngOnInit(){
        this.email = this.route.snapshot.params['email'];
        this.getHeroes();
       }

 getHeroes(): void {
    this._appService
        .getHeroes()
        .then(heroes => {
           this.navItems = heroes;
         //  console.log(this.navItems);
        this.navItemsCategory = this.navItems.categories;
        this.questions = this.navItems.questions;
        });
  }



goBack(): void {
  //  this.location.back();
  this.router.navigate(['/login']);
  }


  handleChange(value){
    if(value != 'very important'){
      this.navigator = false ;
      return false ;
    }
    else{
      this.navigator = true ;
    }
 }



goSubmit(testForm){
 
 if(this.selectedData.length == 0){
   this.htmlToAddOnSubmit =  "Please select atleast two answers in each category"; 
   return false ;
}
 else{
   this._appService.saveTest(this.selectedData , this.email).subscribe(
     data => console.log("data"),
     error => {
        this.router.navigate(['/testError'] );
     },
     () => console.log("finsihed")
   );
//console.log(  localStorage.getItem("dataVal"));
 //  this.router.navigate(['/testSubmit'] , { skipLocationChange: true });
 }
  }




onChange(val , question_no , tab) {
     let obj = {questionNo: question_no, questionAnswer: val , tab : tab};
     if(this.selectedData != null ||  this.selectedData != undefined){
     for(var i = 0 ; i<this.selectedData.length ; i++){
      
      if(this.selectedData[i].questionNo == question_no){
       this.selectedData[i].questionAnswer = val ;
      return ;
      }
      
     }
}
      this.selectedData.push(obj);
 }



}
