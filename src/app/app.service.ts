import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { SelectedData } from './SelectedData' ;

@Injectable()
export class  AppService{

     private headers = new Headers({'Content-Type' : 'application/json'});

     constructor(private http:Http) {}

        dataToPass : any[] = [];


           getHeroes(): Promise<any> {
              return this.http.get('assets/personality_test.json')
               .toPromise()
               .then(response => response.json() )
               .catch(this.handleError);
            }


            private handleError(error: any): Promise<any> {
              return Promise.reject(error.message || error);
             }  



 
          saveTest(saveArr : SelectedData[] , email : string) :any{
                  this.dataToPass.push(saveArr);
                  this.dataToPass.push(email);
            return this.http.post('http://localhost:9000/savetest',JSON.stringify(this.dataToPass) ,{headers : this.headers})
               .map(res => res.json())
               ._catch((err : Response) => {
                 let details = err.json();
                 return Observable.throw(details);
               });
          }
 
}