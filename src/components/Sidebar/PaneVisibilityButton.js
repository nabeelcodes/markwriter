import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useAtom } from "jotai";
import { visibilityAtom } from "../../store/appState";
import { SidebarButton } from "./SidebarButton";
import { EyeIconClosed, EyeIconOpen } from "../../assets/EyeIconSVG";
import { cn } from "../../lib/classNameHelper";
export const PaneVisibilityButton = () => {
    const [paneVisibility, setPaneVisibility] = useAtom(visibilityAtom);
    const toggleHandler = () => {
        setPaneVisibility((prevState) => window.innerWidth < 1280
            ? {
                editingPaneVisibility: !prevState.editingPaneVisibility,
                markdownPaneVisibility: !prevState.markdownPaneVisibility,
            }
            : {
                editingPaneVisibility: true,
                markdownPaneVisibility: !prevState.markdownPaneVisibility,
            });
    };
    return (_jsxs(SidebarButton, { className: "md:frosted-glass-bg group relative bg-white dark:bg-neutral-800", onClick: toggleHandler, children: [_jsxs("span", { className: cn("hidden xl:block", "pointer-events-none absolute top-[0.5rem] whitespace-nowrap border bg-white px-3 py-1 text-sm font-bold shadow-md xl:rounded", "dark:border-neutral-600 dark:bg-neutral-800 dark:text-green-500", "translate-x-14 translate-y-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"), children: [paneVisibility.markdownPaneVisibility ? "Hide" : "Show", " Markdown display pane"] }), paneVisibility.markdownPaneVisibility ? (_jsx(EyeIconOpen, {})) : (_jsx(EyeIconClosed, {}))] }));
};
//# sourceMappingURL=PaneVisibilityButton.js.map