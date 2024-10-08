import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useRef } from "react";
import { handleMousemove } from "../../lib/mouseMoveHelper";
export const NavItemAbout = forwardRef((props, forwardedRef) => {
    const tooltipRef = useRef(null);
    return (_jsx("li", { className: "list-none", ref: forwardedRef, ...props, children: _jsxs("button", { className: "group relative w-full rounded-md border-2 border-gray-800 px-4 py-1.5 font-bold text-neutral-800 dark:border-gray-300 dark:text-gray-300 md:px-3", onMouseMove: (event) => handleMousemove(event, tooltipRef, {
                offsetX: 10,
                offsetY: 18,
            }), children: ["What's this?", _jsx("span", { ref: tooltipRef, className: "fixed z-20 hidden whitespace-nowrap rounded bg-neutral-800 px-2 py-0.5 text-xs font-bold tracking-wide text-gray-100 dark:bg-gray-300 dark:text-neutral-800 group-hover:xl:block", children: "Know more about this app" })] }) }));
});
//# sourceMappingURL=NavItemAbout.js.map