import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-page-film',
  standalone: true,
  imports: [],
  templateUrl: './page-film.component.html',
  styleUrl: './page-film.component.css'
})
export class PageFilmComponent {
  data: any;
  url: string = "";
  img: string = "";
  constructor(private dataservice: DataService, private sanitizer: DomSanitizer){}


  ngOnInit(): void {
    this.dataservice.getData().subscribe(response =>{
      this.data = response;
      console.log(this.data);
      console.log(this.data.poster_path);
      
      // sélection d'une chiffre aléatoire parmis la liste des extraits liés au film
      const m = Math.floor(Math.random()*this.data.videos.results.length)
      this.url = this.data.videos.results[m].key;

      // Affichage du poster du film
      this.img = 'https://image.tmdb.org/t/p/w300/'+this.data.poster_path;
    })
  }

  get safeUrl(): SafeResourceUrl
  {
    return (this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.url));
  }

  //* liste des différents genres du film
  // genreMovie(){
  //   for (let i = 0; i < this.data.genres.length; i++) {
  //     const element = this.data.genres[i].name;
  //     console.log(element);
      
  //   }
  // }
}
