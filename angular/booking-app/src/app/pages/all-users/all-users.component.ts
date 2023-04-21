import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  Users:any[]=[]
  constructor(private global:GlobalService){
    this.global.getUsers().subscribe(res=>{
      this.Users=res.data
    })
  }

}
