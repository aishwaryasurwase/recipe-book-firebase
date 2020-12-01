import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../models/ingredients.model';
import { Recipes } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  selectedRecipeDetails = new Subject<number>();
  recipeChanged = new Subject();

  constructor(private http: HttpClient) { }
  private recipes: Recipes[];

  // private recipes: Recipes[] = [
  //   new Recipes('A test recipe',
  //     'a description of recipe',
  //     '../assets/images/best-crispy-chicken-thighs-garlic-rosemary.png', [
  //     new Ingredients('Meat', 1), new Ingredients('Bread', 10)]),

  //   new Recipes('A test recipe 2 ',
  //     'a description of recipe 2 ',
  //     '../assets/images/Creamy-Tomato-Spinach-Pasta-square.jpg', [
  //     new Ingredients('Milk', 13), new Ingredients('butter', 20)]),

  //   new Recipes('A test recipe 3', 'a description of recipe 3',
  //     '../assets/images/rice.jpg', [
  //     new Ingredients('Wheat', 3)]),

  //   new Recipes('A test recipe 4', 'a description of recipe 3',
  //     '../assets/images/seared-scallops-with-brown-butter.jpg', [
  //     new Ingredients('Bread', 4)])
  // ]

  // setRecipes(recipe) {
  //   this.recipes = recipe;
  //   this.recipeChanged.next(this.recipes.slice());
  // }

  getRecipes() {
    if (this.recipes) {
      return this.recipes.slice();
    } else {
      return []
    }
  }

  getRecipe(id) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipes) {
    console.log('recipe', recipe);
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index, recipe) {
    console.log(index, recipe);
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  fetchRecipe() {
    this.http.get<Recipes[]>("https://recipe-book-f6d1a.firebaseio.com/recipes.json")
    .subscribe((recipe: Recipes[]) => {
      this.recipes = recipe;
      this.recipeChanged.next(this.recipes.slice());
    })
  }

  saveRecipe() {
    this.http.put<Recipes[]>("https://recipe-book-f6d1a.firebaseio.com/recipes.json", this.recipes).subscribe((storeRecipe) => {
      console.log(storeRecipe);
    });
  }
}
