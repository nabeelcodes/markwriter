import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cssStyles from "../../styles/sidebarLoaderAnimation.module.css";
import { SidebarButton } from "./SidebarButton";
import { cn } from "../../lib/classNameHelper";
const LoadingButton = () => (_jsx(SidebarButton, { children: _jsx("div", { className: cssStyles.ripples, children: _jsx("div", { className: cssStyles.ripples__dot }) }) }));
export const SidebarLoader = () => {
    return (_jsx("aside", { className: cn("hidden xl:block", "h-[calc(100vh-92.8px)] p-5", "fixed left-0", "dark:bg-neutral-800", "border-r border-gray-200 dark:border-neutral-600"), children: _jsxs("section", { className: "flex h-full flex-col items-center justify-between", children: [_jsxs("div", { className: "flex flex-col items-center justify-between gap-y-4", children: [_jsx(LoadingButton, {}), _jsx(LoadingButton, {}), _jsx(LoadingButton, {}), _jsx(LoadingButton, {})] }), _jsx(LoadingButton, {})] }) }));
};
//# sourceMappingURL=SidebarLoader.js.map