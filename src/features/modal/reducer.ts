const initialState = {
  picture: '',
  alternativeText: '',
  visible: false
}

interface setAction {
  type: 'modal/set'
  payload: typeof initialState
}

interface closeModal {
  type: 'modal/close'
}

type actions = setAction | closeModal

export function reducer(state = initialState, action: actions): any {
  switch (action.type) {
    case 'modal/set':
      return action.payload

    case 'modal/close':
      return { ...state, visible: false }

    default:
      return state
  }
}
