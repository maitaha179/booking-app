import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  singleUser:any
  constructor (private global: GlobalService , private _activatedRoute:ActivatedRoute){
   let id = this._activatedRoute.snapshot.paramMap.get('userId')
   global.getSingleUser(id).subscribe(res=>{
    this.singleUser=res.data
   })
  }

}
