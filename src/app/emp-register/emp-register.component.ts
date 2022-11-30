import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.css']
})
export class EmpRegisterComponent {
  empid=""
  fname=""
  lname=""
  houseno=""
  housename=""
  streetname=""
  pincode=""
  district=""
  state=""
  country=""
  mob=""
  email=""
  parentname=""
  gender=""
  highestdegree=""
  yoe=""
  doj=""
  uname=""
  pwd=""
  confirmpwd=""
  
  constructor(private router:Router){}

  empRegister =()=>
  {
    let empData:any = {"empid":this.empid,"fname":this.fname,
    "lname":this.lname,
    "houseno":this.houseno,
    "housename":this.housename,
    "streetname":this.streetname,
    "pincode":this.pincode,
    "district":this.district,
    "state":this.state,
    "country":this.country,
    "mob":this.mob,
    "email":this.email,
    "parentname":this.parentname,
    "gender":this.gender,
    "highestdegree":this.highestdegree,
    "yoe":this.yoe,
    "doj":this.doj,
    "uname":this.uname,
    "pwd":this.pwd,
    "confirmpwd":this.confirmpwd }
    if (this.pwd == this.confirmpwd){
      alert("Registration successful")
      console.log(empData)
      this.router.navigate(['/emp'])
    }else
    {
      alert("Registration failed Passwords don't match")
    }
    if (this.pwd == "12345" && this.empid=="1122"){
      alert("Registration successful")
      console.log(empData)
      this.router.navigate(['/'])
    }else
    {
      alert("Invalid Access")
    }
  }
}
