import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 'p1',
      title: 'Portfolio Website',
      description: 'A responsive portfolio built with React and Vite.',
      link: '#',
    },
    {
      id: 'p2',
      title: 'Todo App',
      description: 'A simple todo app demonstrating state management.',
      link: '#',
    },
  ],
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject(state, action) {
      state.items.push(action.payload)
    },
    removeProject(state, action) {
      state.items = state.items.filter((p) => p.id !== action.payload)
    },
  },
})

export const { addProject, removeProject } = projectsSlice.actions
export default projectsSlice.reducer
