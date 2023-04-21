import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient ) { }
  isLogin = false
  navbarFlag = true
  getUsers():Observable<any>{
    return this.http.get("http://localhost:3000/all")
  }
  getSingleUser(userId:any) : Observable<any>{
    return this.http.get(`http://localhost:3000/single/${userId}`)
  }
  getHotels() : Observable<any>{
    return this.http.get("http://localhost:3000/hotels/all")
  }
  getSingleHotel(hotelId:any) : Observable<any>{
    return this.http.get(`http://localhost:3000/hotels/single/${hotelId}`)
  }
  Login(obj:any) :  Observable<any>{
    return this.http.post(`http://localhost:3000/login` , obj)
  }
  register(obj:any) :  Observable<any>{
    return this.http.post(`http://localhost:3000/register` , obj)
  }
}
