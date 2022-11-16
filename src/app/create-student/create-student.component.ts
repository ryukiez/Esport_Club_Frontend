import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update cam nk kuar kan ape tuu hahgahgahga
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOneStudent(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.studentForm.patchValue({
          metric:res.data[0].metric,
          studentName:res.data[0].studentName,
          age:res.data[0].age,
          email:res.data[0].email,
          programme:res.data[0].programme,

      });
    });
  }
  }

  studentForm = new FormGroup({
    'metric':new FormControl('',Validators.required),
    'studentName':new FormControl('',Validators.required),
    'age':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'programme':new FormControl('',Validators.required)


  });

  //to create a new student
  studentSubmit(){
    if(this.studentForm.valid){
      console.log(this.studentForm.value);
      this.service.createStudent( this.studentForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.studentForm.reset();
        this.successmsg = res.message;
      });

    }
    else{
      this.errormsg = 'all field is required';
    }

  }
//to update a customer
studentUpdate()
{
  console.log(this.studentForm.value,'updatedform');

  if(this.studentForm.valid)
  {
    this.service.updateStudent(this.studentForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;

    })
  }
  else
  {
    this.errormsg = 'all field is required';
  }
}
}
