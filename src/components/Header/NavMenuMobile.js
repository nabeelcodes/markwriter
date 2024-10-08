import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavMenuTrigger } from "./NavMenuTrigger";
import { NavItemThemeToggle } from "./NavItemThemeToggle";
import { NavItemAbout } from "./NavItemAbout";
import { NavItemLogin } from "./NavItemLogin";
export const NavMenuMobile = () => {
    return (_jsxs(RadixDropdownMenu.Root, { children: [_jsx(RadixDropdownMenu.Trigger, { asChild: true, children: _jsx(NavMenuTrigger, {}) }), _jsx(RadixDropdownMenu.Portal, { children: _jsx(RadixDropdownMenu.Content, { sideOffset: 10, align: "end", asChild: true, children: _jsx("nav", { className: "z-30 rounded-md border bg-white p-4 text-gray-950 shadow-md dark:border-gray-600 dark:bg-neutral-800 dark:text-gray-300", children: _jsxs("ul", { className: "space-y-3", children: [_jsx(RadixDropdownMenu.Item, { onSelect: (event) => event.preventDefault(), asChild: true, children: _jsx(NavItemThemeToggle, {}) }), _jsx(RadixDropdownMenu.Item, { asChild: true, children: _jsx(NavItemAbout, {}) }), _jsx(RadixDropdownMenu.Item, { asChild: true, children: _jsx(NavItemLogin, {}) })] }) }) }) })] }));
};
//# sourceMappingURL=NavMenuMobile.js.map