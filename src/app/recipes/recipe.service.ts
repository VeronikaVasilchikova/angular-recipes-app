import { EventEmitter, Injectable} from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
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
}
