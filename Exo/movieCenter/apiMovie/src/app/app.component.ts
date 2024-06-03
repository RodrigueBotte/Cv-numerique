import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { url } from 'inspector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Movie Center';
  data: any;
  url: string = "";
  constructor(private dataservice: DataService, private sanitizer: DomSanitizer){}


  ngOnInit(): void {
    this.dataservice.getData().subscribe(response =>{
      this.data = response;
      console.log(this.data);
      this.url = this.data.videos.results[0].key;
      
    })
  }
  // liste des différents genres du film
  genreMovie(){
    for (let i = 0; i < this.data.genres.length; i++) {
      const element = this.data.genres[i].name;
      console.log(element);
      
    }
  }

  get safeUrl(): SafeResourceUrl
  {
    return (this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.url));
  }
}

