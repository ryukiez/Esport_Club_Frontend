import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentComponent } from './student/student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: 'about', component: AboutComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'student', component:StudentComponent},
  {path: 'createStudent', component:CreateStudentComponent},
  {path: 'createStudent/:id', component:CreateStudentComponent},
  {path: 'updateStudent', component:UpdateStudentComponent},
  {path: 'updateStudent/:id', component:UpdateStudentComponent},
  {path: 'signup', component:SignupComponent}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
