import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { WordCount } from "./WordCount";
import { ReadingTime } from "./ReadingTime";
import { cn } from "../../lib/classNameHelper";
import { useAtom } from "jotai";
import { visibilityAtom } from "../../store/appState";
export const StatusBar = memo(() => {
    const [paneVisibility] = useAtom(visibilityAtom);
    return (_jsx("section", { className: cn("md:frosted-glass-bg", "fixed bottom-0 left-0 right-0", "px-5 py-1", "w-full bg-white dark:bg-neutral-800", "text-sm text-black dark:text-gray-300", "border-t dark:border-neutral-600"), children: _jsxs("div", { "aria-label": "inner wrapper for status bar", className: "container2000 flex w-full items-center justify-between", children: [_jsx("span", { className: "font-bold", children: paneVisibility.markdownPaneVisibility ? "Markdown" : "Editor" }), _jsxs("div", { className: "flex items-center justify-between gap-8 font-bold", children: [_jsx(WordCount, {}), _jsx(ReadingTime, {})] })] }) }));
});
//# sourceMappingURL=StatusBar.js.map