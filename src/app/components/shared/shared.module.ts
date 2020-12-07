import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AlertBoxComponent } from '../shared/alert-box/alert-box.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        PageNotFoundComponent,
        AlertBoxComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PageNotFoundComponent,
        AlertBoxComponent
    ]
})
export class SharedModule {

}