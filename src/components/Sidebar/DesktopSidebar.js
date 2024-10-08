import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { GFMButton } from "./GFMButton";
import { RRButton } from "./RRButton";
import { PaneVisibilityButton } from "./PaneVisibilityButton";
import { DownloadButton } from "./DownloadButton";
import { ClearAllButton } from "./ClearAllButton";
import { cn } from "../../lib/classNameHelper";
export const DesktopSidebar = memo(() => {
    return (_jsx("aside", { className: cn("hidden xl:block", "h-[calc(100vh-92.8px)] p-5", "sticky left-0 top-[64.5px]", "dark:bg-neutral-800", "border-r border-gray-200 dark:border-neutral-600"), children: _jsxs("section", { className: "flex h-full flex-col items-center justify-between", children: [_jsxs("div", { className: "flex flex-col items-center justify-between gap-y-4", children: [_jsx(GFMButton, {}), _jsx(RRButton, {}), _jsx(PaneVisibilityButton, {}), _jsx(DownloadButton, {})] }), _jsx(ClearAllButton, {})] }) }));
});
//# sourceMappingURL=DesktopSidebar.js.map