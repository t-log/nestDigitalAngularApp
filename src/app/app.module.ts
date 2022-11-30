import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { FormsModule } from '@angular/forms';
import { ViewAllCoursesComponent } from './view-all-courses/view-all-courses.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseFrinavBarComponent } from './course-frinav-bar/course-frinav-bar.component';
import { FriendsViewComponent } from './friends-view/friends-view.component';
import { EmpPortalComponent } from './emp-portal/emp-portal.component';
import { EmpRegisterComponent } from './emp-register/emp-register.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { NavBaraddCourseFriendComponent } from './nav-baradd-course-friend/nav-baradd-course-friend.component';

const myRoute:Routes = [{path:"",component:HomePageComponent},
                        {path:"admin",component:AdminPortalComponent},
                        {path:"viewAllCourses",component:ViewAllCoursesComponent},
                        {path:"coursefrinavBar",component:CourseFrinavBarComponent},
                        {path:"viewAllFriends",component:FriendsViewComponent},
                        {path:"emp",component:EmpPortalComponent},
                        {path:"register",component:EmpRegisterComponent},
                        {path:"addcourse",component:AddCourseComponent},
                        ]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminPortalComponent,
    ViewAllCoursesComponent,
    CourseFrinavBarComponent,
    FriendsViewComponent,
    EmpPortalComponent,
    EmpRegisterComponent,
    AddCourseComponent,
    NavBaraddCourseFriendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
