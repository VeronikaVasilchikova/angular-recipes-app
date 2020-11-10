import { Injectable} from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  changedRecipe = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      "The First Recipe",
      "The first description",
      "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg",
      [
        new Ingredient("tomato", 5)
      ]
    ),
    new Recipe(
      "The Second Recipe",
      "The first description",
      "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200%2C879&ssl=1",
      [
        new Ingredient("cuccumber", 4)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShL(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.changedRecipe.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.changedRecipe.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.changedRecipe.next(this.recipes.slice());
  }
}
