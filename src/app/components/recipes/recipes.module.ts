import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipesItemComponent,
        RecipesDetailsComponent,
        RecipeEditComponent,
        RecipeStartComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        // SharedModule,
        RouterModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {

}