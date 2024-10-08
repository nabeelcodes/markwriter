import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as RadixDialog from "@radix-ui/react-dialog";
import { useParams } from "react-router-dom";
import { forwardRef, useMemo, useState } from "react";
import { useAtom } from "jotai";
import { appDataAtom } from "../../store/appState";
import { getCurrentPost } from "../../lib/getCurrentPost";
import { updatePostContent } from "../../lib/updatePostContent";
import { DeleteIcon } from "../../assets/DeleteIconSVG";
import { cn } from "../../lib/classNameHelper";
export const ClearAllButton = forwardRef(({ onMobile }, forwardedRef) => {
    const { id } = useParams();
    const [appData, setAppData] = useAtom(appDataAtom);
    const [radixDialogOpen, setRadixDialogOpen] = useState(false);
    const isDisabled = useMemo(() => {
        const currentPost = getCurrentPost(appData, id);
        if (currentPost?.content && currentPost?.content.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }, [appData, id]);
    const handleClick = () => {
        const UpdatedAppData = updatePostContent(appData, id, "");
        setAppData(UpdatedAppData);
        setRadixDialogOpen(false);
    };
    return (_jsxs(RadixDialog.Root, { open: radixDialogOpen, onOpenChange: setRadixDialogOpen, children: [_jsx(RadixDialog.Trigger, { asChild: true, children: _jsxs("button", { ref: forwardedRef, className: cn("group relative grid aspect-square h-12 place-content-center rounded border shadow-sm dark:border-red-600 dark:bg-red-600/10", "hover:xl:shadow-md dark:hover:xl:shadow-red-800", "dark:disabled:border-neutral-600 dark:disabled:bg-neutral-800 disabled:hover:xl:shadow-none", {
                        "border-none bg-transparent shadow-none dark:bg-transparent dark:disabled:bg-transparent": onMobile,
                    }), disabled: isDisabled, children: [!isDisabled && (_jsx("span", { className: cn("hidden xl:block", "pointer-events-none absolute top-[0.5rem] whitespace-nowrap rounded border bg-white px-3 py-1 text-sm font-bold shadow-md", "text-red-500 dark:border-neutral-600 dark:bg-neutral-800", "translate-x-14 translate-y-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"), children: "Clear all content" })), _jsx(DeleteIcon, { disabled: isDisabled })] }) }), _jsxs(RadixDialog.Portal, { children: [_jsx(RadixDialog.Overlay, { className: "fixed inset-0 z-30 backdrop-blur-[2px] data-[state=open]:animate-overlayShow dark:bg-transparent max-md:bg-gray-900/10" }), _jsxs(RadixDialog.Content, { className: cn("z-50", "md:frosted-glass-bg", "fixed max-sm:bottom-4 max-sm:left-5 max-sm:right-5", "sm:w-full sm:max-w-[540px]", "sm:left-[50%] sm:top-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]", "bg-white dark:bg-neutral-800", "rounded-lg p-6 text-center text-neutral-800 shadow-lg dark:text-gray-300 max-sm:p-3 max-sm:pt-5", "border-2 border-white focus:outline-none dark:border dark:border-gray-600", "max-sm:data-[state=open]:animate-contentShowSM", "max-sm:data-[state=closed]:animate-contentHideSM", "data-[state=open]:animate-contentShow", "data-[state=closed]:animate-contentHide"), children: [_jsx(RadixDialog.Title, { className: "mb-5 text-center text-2xl font-bold md:mb-6", children: "Delete Content" }), _jsx("p", { className: "text-sm md:text-base", children: "Are you sure you want to clear all content?" }), _jsxs("blockquote", { className: "mt-3 rounded bg-red-600/20 p-3 text-xs font-bold text-red-500 md:mt-4 md:p-4 md:text-base", children: [_jsx("span", { className: "hidden md:inline-block", children: "\u26A0\uFE0F Caution\u00A0:\u00A0" }), _jsx("span", { className: "md:hidden", children: "\u26A0\uFE0F\u00A0" }), "Content once deleted will be un-recoverable"] }), _jsxs("div", { className: "mt-4 flex flex-col-reverse items-center justify-between gap-4 text-sm sm:flex-row md:text-base", children: [_jsx(RadixDialog.Close, { asChild: true, children: _jsx("button", { className: "w-full rounded border px-4 py-3 font-bold md:py-2", children: "Cancel" }) }), _jsx("button", { className: cn("w-full rounded border px-4 py-3 font-bold md:py-2", "border-black bg-black text-white", "dark:border-white dark:bg-white dark:text-black", "whitespace-nowrap"), onClick: handleClick, children: "Delete Permanently" })] })] })] })] }));
});
//# sourceMappingURL=ClearAllButton.js.map