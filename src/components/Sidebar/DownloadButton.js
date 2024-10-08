import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { appDataAtom } from "../../store/appState";
import { getCurrentPost } from "../../lib/getCurrentPost";
import { DownloadIcon } from "../../assets/DownloadIconSVG";
import { SidebarButton } from "./SidebarButton";
import { downloadFile } from "../../lib/downloadFile";
import { cn } from "../../lib/classNameHelper";
export const DownloadButton = forwardRef(({ onMobile }, forwardedRef) => {
    const { id: pageId } = useParams();
    const [appData] = useAtom(appDataAtom);
    const currentPost = getCurrentPost(appData, pageId);
    const isDisabled = useMemo(() => {
        if (currentPost?.content && currentPost?.content.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }, [currentPost?.content]);
    return (_jsxs(SidebarButton, { ref: forwardedRef, onMobile: onMobile, onClick: () => downloadFile(currentPost), disabled: isDisabled, className: "group relative dark:disabled:border-neutral-600 dark:disabled:bg-neutral-800 disabled:hover:xl:shadow-none", children: [!isDisabled && (_jsx("span", { className: cn("hidden xl:block", "pointer-events-none absolute top-[0.5rem] whitespace-nowrap rounded border bg-white px-3 py-1 text-sm font-bold shadow-md", "dark:border-neutral-600 dark:bg-neutral-800 dark:text-green-500", "translate-x-14 translate-y-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"), children: "Download your Markdown" })), _jsx(DownloadIcon, { disabled: isDisabled })] }));
});
//# sourceMappingURL=DownloadButton.js.map