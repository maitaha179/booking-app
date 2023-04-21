import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-allhotels',
  templateUrl: './allhotels.component.html',
  styleUrls: ['./allhotels.component.css']
})
export class AllhotelsComponent {
  Hotels:any[]=[]
  constructor(private global:GlobalService){
    this.global.getHotels().subscribe(res=>{
      this.Hotels=res.data})
    }
  }
