import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Recipes } from './recipes.model';
import { RecipesService } from './recipes.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<any>{

  constructor(private recipesService: RecipesService) { }
  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    return this.recipesService.fetchRecipe();
  }
}
