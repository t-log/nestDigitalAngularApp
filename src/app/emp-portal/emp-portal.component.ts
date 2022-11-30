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
    if(this.empid=="1122" && this.password=="12345")
    {
      alert("Login successful")

      this.router.navigate(['/addcourse'])

    }
    else
    {
      alert("Invalid Credentials!")
      this.empid=""
      this.password=""
    }
  }

}
