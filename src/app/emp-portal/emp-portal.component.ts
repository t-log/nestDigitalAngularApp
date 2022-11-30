import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-portal',
  templateUrl: './emp-portal.component.html',
  styleUrls: ['./emp-portal.component.css']
})
export class EmpPortalComponent {

  empid=""
  password=""

  constructor(private router:Router){}

  getempData=()=>
  {
    if(this.empid=="" && this.password=="")
    {
      alert("Login successful")
      this.empid=""
      this.password=""

    }
    else
    {
      alert("Invalid Credentials!")
      this.empid=""
      this.password=""
    }
  }

}
