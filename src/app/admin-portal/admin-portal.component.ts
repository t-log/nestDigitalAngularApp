import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent {

  username=""
  password=""
  
  constructor(private router:Router){}

  getadminData=()=>
  { 
    // let adminData:any = {"username":this.username,"password":this.password}
    // console.log(adminData)
    if(this.username=="admin" && this.password=="nest")
    {
      alert("Login successful")
      this.router.navigate(['/viewAllCourses'])

    }
    else
    {
      alert("Invalid Credentials!")
      this.username=""
      this.password=""
    }
  }

}
