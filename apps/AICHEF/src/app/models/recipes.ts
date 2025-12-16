export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
  servings: number;
  prep_time: number;
  cook_time: number;
  total_time: number;
  benefits: string[];
  variation?: boolean;
  notes?: string[];
  image?: string;
  video?: string;
}

export interface RecipesApiResponse {
  recipes: Recipe[];
}

export type RecipesResponse = { recipes: string };

