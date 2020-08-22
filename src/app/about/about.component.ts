import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  template: '<youtube-player videoId="PRQCAL_RMVo"></youtube-player>',
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/watch?v=vgeYZqQMiCk";
    document.body.appendChild(tag);
  }
}
