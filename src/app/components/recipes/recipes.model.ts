import { Ingredients } from '../models/ingredients.model';

export class Recipes {
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredients[];

    constructor(name: string, description: string, imagePath: string, ingredients: Ingredients[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}