import type { NavigationItem } from "@/models/types/base";

const NavLinks: { [key: string]: Array<NavigationItem> } = {
    Main: [
        { title: "Home", path: "/", icon: "home", role: "" },
        {
            title: "Components",
            path: "/Components",
            icon: "rectangle-list",
            role: "",
        },
        { title: "Positions", path: "/Positions", icon: "crosshairs", role: "" },
        { title: "Test", path: "/test", icon: "flask", role: "" },
    ],

}
export { NavLinks }