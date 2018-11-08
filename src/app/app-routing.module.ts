import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent }from './users/users.component';
import { DetailsComponent }from './details/details.component';
import { PostsComponent }from './posts/posts.component';
import { LoginComponent }from './login/login.component';
import { HomeComponent }from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path:'posts',
    component: PostsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  { path:'signup',
  component: SignupComponent
  },
  { path:'users',
  component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }