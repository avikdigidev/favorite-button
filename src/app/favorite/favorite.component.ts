import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick()   {

    console.log("isFavorite before: " + this.isFavorite)

    this.isFavorite = !this.isFavorite; //toggling

    console.log("isFavorite after: " + this.isFavorite)

  }
  
}
