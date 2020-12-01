import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes;
  recipeSubscription: Subscription;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    // this.recipeService.fetchRecipe().subscribe((recipesData) => {
    //   console.log("REcipes ", this.recipes);
    //   this.recipes = recipesData;
    // });

    this.recipeSubscription = this.recipeService.recipeChanged.subscribe((recipes) => {
      this.recipes = recipes;
    })
  }

  selectedRecipe(index: number) {
    this.recipeService.selectedRecipeDetails.next(index);
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }
}
