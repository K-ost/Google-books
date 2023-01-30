import { createSlice } from '@reduxjs/toolkit'

export interface appState {
  search: string
  order: 'relevance' | 'newest'
  subject: string
  load: boolean
  page: number
}

const initialState: appState = {
  search: '',
  order: 'relevance',
  subject: 'all',
  load: true,
  page: 0
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setOrder: (state, action) => {
      state.order = action.payload
    },
    setSubject: (state, action) => {
      state.subject = action.payload
    },
    setLoad: (state, action) => {
      state.load = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSearch, setOrder, setSubject, setLoad, setPage } = appSlice.actions

export default appSlice.reducer