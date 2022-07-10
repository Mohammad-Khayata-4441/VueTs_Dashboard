import type { NavigationItem } from "@/models/types/base";

const NavLinks: { [key: string]: Array<NavigationItem> } = {
    Main: [
        { title: "Home", path: "/dashboard/home", icon: "home", role: "" },
        {
            title: "Components",
            path: "/dashboard/components",
            icon: "rectangle-list",
            role: "",
        },
        { title: "Positions", path: "/", icon: "crosshairs", role: "" },
        { title: "Test", path: "/", icon: "flask", role: "" },
    ],

}
export { NavLinks }