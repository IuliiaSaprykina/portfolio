import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  
  // defaultProfilePic: string ='./Rran7DFz-bU.jpg';

  constructor(private data: DataService) { }

  ngOnInit() {
    // this.data.getUsers().subscribe(data => {
    //   this.users = data
    //   console.log(this.users)
    // })
  }

}
