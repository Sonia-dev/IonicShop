import { Teeshirt } from './../model/teeshirt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeeshirtsService {

  private Teeshirt=[];
//api path
base_path ='http://localhost:3000/teeshirts';
constructor(private http: HttpClient) { }
//http options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'

  })
}

setData(obj){
  this.Teeshirt=obj;
}

getData(){
  return this.Teeshirt;
}



//create a new item
createTeeshirt(item): Observable<Teeshirt>{
return this.http
.post<Teeshirt>(this.base_path, JSON.stringify(item), this.httpOptions)
}
//get single teeshirt data
getTeeshirt(id): Observable<Teeshirt>{
return this.http
.get<Teeshirt>(this.base_path + '/' + id , this.httpOptions)
}
//get teeshirts data
getTeeshirts(): Observable<Teeshirt[]>{
return this.http
.get<Teeshirt[]>( this.base_path)
}
//update item by id
updateTeeshirt(id, item): Observable<Teeshirt>{
return this.http
.put<Teeshirt>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
}
//delete item by id
deleteTeeshirt(id): Observable<Teeshirt>{
return this.http
.delete<Teeshirt>(this.base_path + '/' + id, this.httpOptions)
}

}