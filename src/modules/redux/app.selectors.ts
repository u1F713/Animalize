import type { RootState, AppDispatch } from './store'
import {
  TypedUseSelectorHook,
  useDispatch as reduxUseDispacth,
  useSelector as useReduxSelect
} from 'react-redux'

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelect
export const useDispatch: () => AppDispatch = reduxUseDispacth
