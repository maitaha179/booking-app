import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  singleHotel:any
  constructor (private global: GlobalService, private _activatedRoute:ActivatedRoute){
   let id = this._activatedRoute.snapshot.paramMap.get('hotelId');
   console.log(id)
   global.getSingleHotel(id).subscribe(res=>{
    this.singleHotel=res.data
   })

    }
}
