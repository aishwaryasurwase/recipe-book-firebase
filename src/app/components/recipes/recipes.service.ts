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

  constructor() { }
  private recipes: Recipes[] = [
    new Recipes('Pav bhaji',
      'Pav bhaji is a fast food dish from India. \
      It consists of a thick vegetable curry served with a soft bread roll. \
      Vegetables in the curry may include potatoes, onions, carrots, chillies, peas, \
      bell peppers, and tomatoes. Its origins are in the state of Maharashtra.',
      '../assets/images/pavbhaji.jpg', [
      new Ingredients('Bread', 4), new Ingredients('Potatoes', 4),
      new Ingredients('Onions', 3), new Ingredients('Carrots', 2),
      new Ingredients('Chillies', 4), new Ingredients('Peas', 3),
      new Ingredients('Bell peppers', 2), new Ingredients('Tomatoes', 4)]),

    new Recipes('Pani puri',
      'Panipuri or Fuchka or Gupchup or Golgappa is a type of snack that originated in the Indian subcontinent, \
      and is one of the most common street foods in Pakistan, India and Bangladesh.',
      '../assets/images/PaniPuri.jpg', [
      new Ingredients('Puri', 10), new Ingredients('Imli pani', 2),
      new Ingredients('Tamarind Chutney', 2), new Ingredients('Chili powder', 2),
      new Ingredients('Chaat masala', 3), new Ingredients('Potato mash', 4),
      new Ingredients('Onions', 20), new Ingredients('Chickpeas', 3)]),

    new Recipes('Misal pav', 'Misal pav is a popular dish from Nashik, India. \
    It consists of misal and pav. The final dish is topped with farsan or sev, \
    onions, lemon and coriander. It is usually served with bread or rolls toasted \
    with butter and buttermilk or curd and papad. \
    It is served as a breakfast dish, as a snack and also as a full meal.',
      '../assets/images/MisalPav.jpg', [
      new Ingredients('Farsan', 3), new Ingredients('Onions', 3), new Ingredients('Lemmon', 2), new Ingredients('Coriander', 2),
      new Ingredients('Pav', 4), new Ingredients('Butter', 4), new Ingredients('Buttermilk', 3),
      new Ingredients('Curd', 4), new Ingredients('Papad', 4)]),

    new Recipes('Chole bhature', 'Chole bhature is a food dish originating from northern India. \
    However, in Pakistan, Rawalpindi Chole Bhature is very popular, it is a combination of \
    chana masala and bhatura/Puri, a fried bread made from maida. \
    There is a distinct Punjabi variant of the dish',
      '../assets/images/CholeBhature.jpg', [
      new Ingredients('Maida', 2), new Ingredients('Baking powder', 1), new Ingredients('Oil', 3),
      new Ingredients('Yogurt', 4), new Ingredients('Salt', 1)])
  ]

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id) {
    return this.recipes[id];
  }

  addRecipe(recipe) {
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

}
