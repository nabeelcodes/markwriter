import { jsx as _jsx } from "react/jsx-runtime";
import { useAtom } from "jotai";
import { visibilityAtom } from "../../store/appState";
export const ShowError = () => {
    const [paneVisibility] = useAtom(visibilityAtom);
    return (paneVisibility.markdownPaneVisibility && (_jsx("section", { role: "alert", "aria-label": "error message", className: "grid shrink grow basis-1/2 place-content-center border-gray-200 dark:border-neutral-600 xl:border-l", children: _jsx("span", { className: "rounded-full px-4 py-2 font-bold text-red-500", children: "\u26D4 Oops! Something went wrong." }) })));
};
//# sourceMappingURL=ShowError.js.map