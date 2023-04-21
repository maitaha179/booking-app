import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-show-hotels',
  templateUrl: './show-hotels.component.html',
  styleUrls: ['./show-hotels.component.css']
})
export class ShowHotelsComponent {
  Hotels:any[]=[]
  constructor(private global:GlobalService){
    this.global.getHotels().subscribe(res=>{
      this.Hotels=res.data})
    }
}
