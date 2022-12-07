import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('A test Recipe','This is simply a test', 'https://lh3.googleusercontent.com/m4nTw90Qpnb_BZwENHBv3FjfJ6Xt2mpgnP-bCr8j_1_fOXmqN000XjTh5B__ZpTt9BKWekysBSDhNljGPJPk799bBIkw4iFbAg=w220-h220-c-rw-v1-e365')
  ];


}
