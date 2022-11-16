import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  listData:any;
  successmsg:any;


ngOnInit(): void {
  this.getAllStudent();


  }

  //get delete id
  deleteId(id:any){
    console.log(id,'deleteid==>');
    this.service.deleteStudent(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = res.message;
      this.getAllStudent();

    });

  }

  //get student
  getAllStudent(){

    this.service.getAllStudent().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });

  }

}