import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-friends-view',
  templateUrl: './friends-view.component.html',
  styleUrls: ['./friends-view.component.css']
})
export class FriendsViewComponent {
  data:any = []
  constructor(api:ApiService){
    api.fetchFriends().subscribe(
      (response)=>{this.data=response}
    )
  }
}
