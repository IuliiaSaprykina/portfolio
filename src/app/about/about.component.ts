import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],

})
export class AboutComponent implements OnInit {
  title = "Video List"
  videoList = [
    {
      name: "Item 1",
      slug: "item-1",
      embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vgeYZqQMiCk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
