import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { Register } from 'src/app/interfaces/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 model : Register ={
  fname:"",
  lname:"",
  email : "",
  password: "",
  address: "",
  phone: "",
  age:""
}
msgError = null
  pageType : any
constructor(private global : GlobalService , private router : Router , 
  private Activatedroute : ActivatedRoute){
    this.Activatedroute.data.subscribe(res=>{
        this.pageType = res['type']
        if(this.pageType == 'user') this.global.navbarFlag = false
        console.log(this.pageType)
    })

  }
handleSubmit(form : NgForm){
  console.log(form)
  if(form.valid){
    if(this.pageType == 'user'){
      this.global.register(this.model).subscribe(res=>{
       
        this.global.isLogin = true
        if(res.status) this.router.navigateByUrl('')

      }, (e)=>{
        console.log(e.error.message)
        this.msgError = e.error.message
      })
    }
   


  }
}
}
