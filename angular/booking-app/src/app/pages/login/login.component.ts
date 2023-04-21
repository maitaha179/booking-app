import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { Login } from 'src/app/interfaces/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model : Login ={
    email:'',
    password:'',
  }
  msgError = null
  pageType : any
    constructor(private global : GlobalService , private router : Router , 
    private Activatedroute : ActivatedRoute){
      this.Activatedroute.data.subscribe(res=>{
          this.pageType = res['type']
          if(this.pageType == 'admin') this.global.navbarFlag = false
          console.log(this.pageType)
      })

    }
  handleSubmit(form : NgForm){
    console.log(form)
    if(form.valid){
      if(this.pageType == 'user'){
        this.global.Login(this.model).subscribe(res=>{
         
          this.global.isLogin = true
          if(res.status) this.router.navigateByUrl('hotels')
  
        }, (e)=>{
          console.log(e.error.message)
          this.msgError = e.error.message
        })
      }
     


    }
  }
 

}