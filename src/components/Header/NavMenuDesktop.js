import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavItemShortcuts } from "./NavItemShortcuts";
import { NavItemThemeToggle } from "./NavItemThemeToggle";
import { NavItemAbout } from "./NavItemAbout";
import { NavItemLogin } from "./NavItemLogin";
export const NavMenuDesktop = () => {
    return (_jsx("nav", { className: "hidden md:block", children: _jsxs("ul", { className: "md:flex md:items-center md:justify-between md:gap-5", children: [_jsx(NavItemShortcuts, {}), _jsx(NavItemThemeToggle, {}), _jsx(NavItemAbout, {}), _jsx(NavItemLogin, {})] }) }));
};
//# sourceMappingURL=NavMenuDesktop.js.map