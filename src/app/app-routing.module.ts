import {NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';
import { TestDetailComponent } from './test-details.component' ;
import {LoginComponent } from './login.component';
import {TestSubmitComponent} from './test-submission.component';
import {ErrorComponent } from './error.component';


const routes : Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent },
    {path : 'testDetails/:email' , component: TestDetailComponent},
    {path: 'testSubmit' , component: TestSubmitComponent},
    {path : 'testError', component : ErrorComponent}
];

@NgModule({

imports:[
    RouterModule.forRoot(routes)
],
exports:[
    RouterModule
]

})


export class AppRoutingModule {}

export const routingComponents = [TestDetailComponent , TestSubmitComponent,ErrorComponent]