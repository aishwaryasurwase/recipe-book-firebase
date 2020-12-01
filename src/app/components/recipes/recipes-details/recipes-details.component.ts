import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  recipe;
  recipeId;

  constructor(private recipesService: RecipesService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];

      this.recipe = this.recipesService.getRecipe(this.recipeId);
      this.recipesService.recipeChanged.subscribe((recipe) => {
        this.recipe = recipe;
      })
    })
  }

  addToShoppingList(ingredients) {
    console.log(ingredients);
    for (let ingredient of ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }
  }

  removeRecipe() {
    this.recipesService.removeRecipe(this.recipeId);
    this.router.navigate(['/recipes'])
  }

  onEditRecipe() {
}


}
