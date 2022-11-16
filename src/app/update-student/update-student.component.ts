import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})


export class UpdateStudentComponent implements OnInit {

  studentForm = new FormGroup({
    'metric':new FormControl('',Validators.required),
    'studentName':new FormControl('',Validators.required),
    'age':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'programme':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOneStudent(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.studentForm.patchValue({
            metric:res.data[0].metric,
            studentName:res.data[0].studentName,
            age:res.data[0].age,
            email:res.data[0].email,
            programme:res.data[0].programme
        });
      });
  }
//to update a student
studentUpdate()
{
  console.log(this.studentForm.value);
    this.service.updateStudent(this.router.snapshot.params['id'], this.studentForm.value).subscribe((result:any)=>{

    this.studentForm.reset();
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}

