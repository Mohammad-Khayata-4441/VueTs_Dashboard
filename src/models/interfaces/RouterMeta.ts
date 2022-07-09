import type { Layouts } from "@/models/enums/Layouts";
export interface RouterMeta {
    layout: Layouts;
    title: string;
    requireAuth: boolean;
    roles?: Array<unknown>,
    breadCrumb: Array<unknown>

}