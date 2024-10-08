import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import cssStyles from "../../styles/navMenuTrigger.module.css";
export const NavMenuTrigger = forwardRef((props, forwardedRef) => {
    return (_jsx("button", { className: `md:hidden ${cssStyles.triggerButton}`, "aria-label": "Navigation Menu trigger", ref: forwardedRef, type: "button", ...props, children: _jsxs("div", { className: cssStyles.hamburger, children: [_jsx("span", { className: `bg-neutral-800 dark:bg-gray-300 ${cssStyles.line}` }), _jsx("span", { className: `bg-neutral-800 dark:bg-gray-300 ${cssStyles.line}` }), _jsx("span", { className: `bg-neutral-800 dark:bg-gray-300 ${cssStyles.line}` })] }) }));
});
//# sourceMappingURL=NavMenuTrigger.js.map