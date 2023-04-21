import { Component,OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Users:any[]=[]
  constructor(private global:GlobalService){
    this.global.getUsers().subscribe(res=>{
      this.Users=res.data
    })
  }
 
}

