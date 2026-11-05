import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
  switch (action.type) {
    case 'sort': { // by name
      const stateCopy = [...state]

      stateCopy.sort((a, b) => {
        if (action.payload === 'up') {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        } else {
          if (a.name < b.name) return 1
          if (a.name > b.name) return -1
          return 0
        }
      })
      return stateCopy
    }
    case 'check': {
      return state.filter(user => user.age >= action.payload)
    }
    default:
      return state
  }
}
