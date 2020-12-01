import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe;
  index;

  constructor(private recipesService: RecipesService, private router: Router) { }

  ngOnInit(): void {
    this.recipesService.selectedRecipeDetails.subscribe((index) => {
      this.router.navigate(['/recipes', index]);
    })
  }
}