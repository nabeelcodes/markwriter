import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAtom } from "jotai";
import { forwardRef, useEffect, useRef } from "react";
import { DayIcon } from "../../assets/DayIconSVG";
import { NightIcon } from "../../assets/NightIconSVG";
import { themeAtom } from "../../store/appState";
import { handleMousemove } from "../../lib/mouseMoveHelper";
export const NavItemThemeToggle = forwardRef((props, forwardedRef) => {
    const htmlTagCLasslist = document.documentElement.classList;
    const [appTheme, setAppTheme] = useAtom(themeAtom);
    const tooltipRef = useRef(null);
    useEffect(() => {
        if (appTheme === "dark") {
            htmlTagCLasslist.remove("light");
            htmlTagCLasslist.add("dark");
        }
        else {
            htmlTagCLasslist.remove("dark");
            htmlTagCLasslist.add("light");
        }
    }, [appTheme, htmlTagCLasslist]);
    const handleDarkMode = () => {
        if (htmlTagCLasslist.contains("light")) {
            setAppTheme("dark");
        }
        else {
            setAppTheme("light");
        }
    };
    return (_jsx("li", { className: "list-none", ref: forwardedRef, ...props, children: _jsxs("button", { "aria-label": "Theme Toggle Button", className: "group relative flex w-full items-center justify-between xl:p-2", onClick: handleDarkMode, onMouseMove: (event) => handleMousemove(event, tooltipRef, {
                offsetX: 10,
                offsetY: 18,
            }), children: [appTheme === "dark" ? _jsx(DayIcon, {}) : _jsx(NightIcon, {}), _jsx("span", { className: "md:hidden", children: appTheme === "dark" ? "Light" : "Dark" }), _jsxs("span", { ref: tooltipRef, className: "fixed z-20 hidden whitespace-nowrap rounded bg-neutral-800 px-2 py-0.5 text-xs font-bold tracking-wide text-gray-100 dark:bg-gray-300 dark:text-neutral-800 group-hover:xl:block", children: ["Go ", appTheme === "dark" ? "light" : "dark", " mode"] })] }) }));
});
//# sourceMappingURL=NavItemThemeToggle.js.map