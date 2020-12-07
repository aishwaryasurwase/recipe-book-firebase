import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

import { RouterModule } from '@angular/router';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        FormsModule,
        // CommonModule,
        SharedModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent }
        ]),
    ],
    exports: [
        ShoppingListComponent,
        ShoppingEditComponent
    ]
})
export class ShoppingListModule {

}