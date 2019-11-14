export default interface Cocktail {
    id: number;
    name: string;
    thumb: string;
    steps: string;
    alcoholic: boolean;
    ingredients: {
        ingredient1?: string;
        ingredient2?: string;
        ingredient3?: string;
        ingredient4?: string;
        ingredient5?: string;
        ingredient6?: string;
        ingredient7?: string;
    };
  }
