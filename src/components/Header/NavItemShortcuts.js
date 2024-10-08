import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Root, Trigger, Portal, Overlay, Content, Title, Description, Close, } from "@radix-ui/react-dialog";
import { useRef } from "react";
import { CloseIcon } from "../../assets/CloseIconSVG";
import { CmdIcon } from "../../assets/CmdIconSVG";
import { handleMousemove } from "../../lib/mouseMoveHelper";
export const NavItemShortcuts = () => {
    const tooltipRef = useRef(null);
    return (_jsxs(Root, { children: [_jsx(Trigger, { asChild: true, children: _jsx("li", { className: "list-none", children: _jsxs("button", { className: "group relative p-2", "aria-label": "Shortcuts Button", onMouseMove: (event) => handleMousemove(event, tooltipRef, {
                            offsetX: 10,
                            offsetY: 18,
                        }), children: [_jsx(CmdIcon, {}), _jsx("span", { ref: tooltipRef, className: "fixed z-20 hidden whitespace-nowrap rounded bg-neutral-800 px-2 py-0.5 text-xs font-bold tracking-wide text-gray-100 dark:bg-gray-300 dark:text-neutral-800 group-hover:xl:block", children: "Show shortcuts" })] }) }) }), _jsxs(Portal, { children: [_jsx(Overlay, { className: "fixed inset-0 z-30 backdrop-blur-[2px] data-[state=open]:animate-overlayShow" }), _jsxs(Content, { className: "md:frosted-glass-bg fixed left-[50%] top-[50%] z-30 w-max max-w-[540px] translate-x-[-50%] translate-y-[-50%] rounded-lg border border-gray-100 px-6 py-6 text-neutral-800 shadow-lg focus:outline-none data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow dark:border-gray-600 dark:text-gray-300", children: [_jsx(Title, { className: "mb-4 border-b-2 pb-2 text-2xl font-bold dark:border-b-gray-600", children: "Keyboard Shortcuts" }), _jsxs(Description, { children: ["To increase your productivity when working with markdown, you can use the following keyboard shortcuts by pressing ", _jsx("br", {}), _jsx("code", { className: "rounded border px-1 font-mono", children: "Cmd + Ctrl" }), " on a Mac or", " ", _jsx("code", { className: "rounded border px-1 font-mono", children: "Alt + Ctrl" }), " on Windows :"] }), _jsx("ul", { className: "list-disc p-4 pb-0", children: [...Array(8)].map((_, i) => (_jsxs("li", { className: "mb-2", children: [_jsx("code", { className: "rounded border px-1 font-mono", children: "t" }), " : insert a table"] }, i))) }), _jsx(Close, { asChild: true, children: _jsx("button", { "aria-label": "Close", className: "absolute right-4 top-4 opacity-70", children: _jsx(CloseIcon, {}) }) })] })] })] }));
};
//# sourceMappingURL=NavItemShortcuts.js.map