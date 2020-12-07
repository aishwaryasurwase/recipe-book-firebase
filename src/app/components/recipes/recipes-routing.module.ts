import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipesDetailsComponent } from '../recipes/recipes-details/recipes-details.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '', component: RecipesComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new-recipe', component: RecipeEditComponent },
            { path: ':id', component: RecipesDetailsComponent },
            { path: ':id/edit-recipe', component: RecipeEditComponent },
            { path: "**", component: PageNotFoundComponent }
        ]
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {

}