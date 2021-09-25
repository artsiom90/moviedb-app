import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../redux/store/types'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
