import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const baseStudentUrl = "http://localhost:8080/students"
const createStudentUrl = "http://localhost:8080/students/add"
const delStudentUrl = "http://localhost:8080/students/del"
const putStudentUrl = "http://localhost:8080/students/put"

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  getStudents() {
    throw new Error('Method not implemented.');
  }


  constructor(private _http:HttpClient) { }
  //to connect the frontend to backend
//get all student
getAllStudent():Observable<any>{
  const url = "http://localhost:8080/allstudents"
  return this._http.get<any>(url)
}

 // create student
 createStudent(student: any):Observable<any>{
  console.log(student,'createapi=>');
  return this._http.post(createStudentUrl, student)
}

//deleting student

deleteStudent(id: any): Observable<any> {
  return this._http.delete(`${delStudentUrl}/${id}`);

}

//update student
updateStudent(id: any, student: any): Observable<any> {
  return this._http.put(`${putStudentUrl}/${id}`, student);

}

//get one student
getOneStudent(id:any):Observable<any>{
  return this._http.get(`${baseStudentUrl}/${id}`);
}

}
