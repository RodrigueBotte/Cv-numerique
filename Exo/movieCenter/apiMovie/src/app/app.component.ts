import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

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

  constructor(private dataservice: DataService){}
  ngOnInit(): void {
    this.dataservice.getData().subscribe(response =>{
      this.data = response;
      console.log(this.data);
      
    })
  }
}

