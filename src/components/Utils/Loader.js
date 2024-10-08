import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../lib/classNameHelper";
import cssStyles from "../../styles/loaderAnimation.module.css";
export const Loader = () => {
    return (_jsx("section", { role: "loader", "aria-label": "loader spinner", className: cn("grid place-content-center", "shrink grow basis-1/2 py-8 xl:p-10", "border-gray-200 dark:border-neutral-600 xl:border-l"), children: _jsxs("div", { className: cssStyles.loaderGrid, children: [_jsx("div", { className: "bg-neutral-800 dark:bg-white" }), _jsx("div", { className: "bg-neutral-800 dark:bg-white" }), _jsx("div", { className: "bg-neutral-800 dark:bg-white" }), _jsx("div", { className: "bg-neutral-800 dark:bg-white" }), _jsx("div", { className: "bg-neutral-800 dark:bg-white" }), _jsx("div", { className: "bg-neutral-800 dark:bg-white" }), _jsx("div", { className: "bg-neutral-800 dark:bg-white" }), _jsx("div", { className: "bg-neutral-800 dark:bg-white" }), _jsx("div", { className: "bg-neutral-800 dark:bg-white" })] }) }));
};
//# sourceMappingURL=Loader.js.map