export interface MealItem {
  title: string,
  quantity: number,
  servingSize: number,
  servingUnit: string,
  protein: number,
  carbs: number,
  fats: number,
}

export interface Meal {
  items: Array<MealItem>,
}

export interface Menu {
  open: boolean,
  meal: Meal,
}

export interface App {
  active: string,
}

export interface State {
  app: App,
  menus: { [k: string]: Menu },
}
