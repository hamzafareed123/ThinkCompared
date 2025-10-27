import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Signin } from './pages/signin/signin';
import { Signup } from './pages/signup/signup';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Signin,
    Signup,
    AuthRoutingModule
  ],

  exports:[
    Signin,
    Signup
  ]

})
export class AuthModule { }
