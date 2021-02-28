import { createStore, Store } from 'redux'

import {
  Meal,
  State,
} from '../interfaces'

export enum actions {
  'TOGGLE_MENU' = 'TOGGLE_MENU',
  'EDIT_MEAL' = 'EDIT_MEAL',
}

class StateManager {
  private store: Store
  private initState: State = {
    app: {
      active: 'meals',
    },
    menus: {
      'meal 1': {
        open: false,
        meal: {
          items: [
            {
              title: 'Chicken Breast',
              quantity: 2,
              servingSize: 3,
              servingUnit: 'oz',
              protein: 30,
              carbs: 30,
              fats: 30,
            },
            {
              title: 'White Rice',
              quantity: 4,
              servingSize: 100,
              servingUnit: 'g',
              protein: 30,
              carbs: 30,
              fats: 30,
            },
            {
              title: 'Avocado Oil',
              quantity: 1,
              servingSize: 1,
              servingUnit: 'tbsp',
              protein: 30,
              carbs: 30,
              fats: 30,
            },
          ],
        }
      },
      'meal 2': {
        open: false,
        meal: {
          items: [
            {
              title: 'Chicken Breast',
              quantity: 1,
              servingSize: 6,
              servingUnit: 'oz',
              protein: 30,
              carbs: 30,
              fats: 30,
            },
          ]
        },
      }
    }
  }

  constructor() {
    this.store = createStore(this._rootReducer)
  }

  private _rootReducer = (state: State = this.initState, action: { type: string, data?: any }): State => {
    switch (action.type) {
      case actions.TOGGLE_MENU: {
        const menus = state.menus
        const menuItem = state.menus[action.data.title]

        return { ...state, menus: { ...menus, [action.data.title]: { ...menuItem, open: !menuItem.open } } }
      }
      case actions.EDIT_MEAL: {
        return { ...state }
      }
      default: {
        return state
      }
    }
  }

  public getStateInstance = (): Store => {
    return this.store
  }
}

const stateManager: StateManager = new StateManager()
export default stateManager.getStateInstance()
