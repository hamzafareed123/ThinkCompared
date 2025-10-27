import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Signin} from './pages/signin/signin';
import { Signup } from './pages/signup/signup';

const routes: Routes = [
  { path: 'signin', component: Signin },
  { path: 'signup', component: Signup },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
