import { defineStore } from 'pinia'
import { Layouts, Theme } from '@/models/enums'
export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    layout: Layouts.Dashboard as Layouts,
    theme: Theme.Light as Theme,
  }),
  getters: {
    activeLayout: (state) => state.layout
  },
  actions: {
    setLayout(layout: Layouts) {
      this.layout = layout;
    }
  }
})
