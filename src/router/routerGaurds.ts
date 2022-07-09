import type { Layouts } from '@/models/enums/Layouts';
import { useAppStore } from '@/stores/App';
import type { RouteLocation } from 'vue-router';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const beforeEach = (to: RouteLocation, from: RouteLocation, next: any) => {

    const appStore = useAppStore()
    appStore.setLayout(to.meta?.layout as Layouts)
    next()
}
