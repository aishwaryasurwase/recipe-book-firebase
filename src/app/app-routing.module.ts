import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
// import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
// import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
// import { RecipesDetailsComponent } from './components/recipes/recipes-details/recipes-details.component';
// import { RecipesComponent } from './components/recipes/recipes.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // {
  //   path: 'recipes', component: RecipesComponent,
  //   children: [
  //     { path: '', component: RecipeStartComponent },
  //     { path: 'new-recipe', component: RecipeEditComponent },
  //     { path: ':id', component: RecipesDetailsComponent },
  //     { path: ':id/edit-recipe', component: RecipeEditComponent },
  //     { path: "**", component: PageNotFoundComponent }
  //   ]
  // },
  // { path: 'recipes', loadChildren: './components/recipes/recipes.module#RecipesModule' },
  { path: 'recipes', loadChildren: () => import('./components/recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'shopping-list', loadChildren: () => import('./components/shopping-list/shopping-list.module').then(m => m.ShoppingListModule) },
  { path: 'auth', component: AuthComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
