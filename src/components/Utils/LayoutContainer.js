import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
export const LayoutContainer = () => {
    return (_jsxs("div", { className: "relative flex min-h-screen flex-col bg-white font-sans text-gray-950 dark:bg-neutral-800 dark:text-gray-300", "aria-label": "App wrapper", children: [_jsx(Header, {}), _jsx("main", { className: "grow", children: _jsx(Outlet, {}) })] }));
};
//# sourceMappingURL=LayoutContainer.js.map