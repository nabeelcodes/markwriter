import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as RadixDialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useAtom } from "jotai";
import { appDataAtom } from "../../store/appState";
import { DeleteIcon } from "../../assets/DeleteIconSVG";
import { cn } from "../../lib/classNameHelper";
export const DeletePostButton = ({ isGridMode, postId, }) => {
    const [appData, setAppData] = useAtom(appDataAtom);
    const [radixDialogOpen, setRadixDialogOpen] = useState(false);
    const handleDelete = () => {
        const filteredAppData = appData.filter((post) => post.id !== postId);
        setAppData(filteredAppData);
        setRadixDialogOpen(false);
    };
    return (_jsxs(RadixDialog.Root, { open: radixDialogOpen, onOpenChange: setRadixDialogOpen, children: [_jsx(RadixDialog.Trigger, { asChild: true, children: _jsx("button", { className: cn("h-24 bg-red-600/10 px-2", {
                        "absolute bottom-0 right-0 z-20 h-auto bg-transparent py-3": isGridMode,
                    }), children: _jsx(DeleteIcon, { className: "h-5 hover:opacity-80" }) }) }), _jsxs(RadixDialog.Portal, { children: [_jsx(RadixDialog.Overlay, { className: "fixed inset-0 z-30 backdrop-blur-[2px] data-[state=open]:animate-overlayShow dark:bg-transparent max-md:bg-gray-900/50" }), _jsxs(RadixDialog.Content, { className: cn("z-50", "md:frosted-glass-bg", "fixed max-sm:bottom-4 max-sm:left-5 max-sm:right-5", "sm:w-full sm:max-w-[540px]", "sm:left-[50%] sm:top-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]", "bg-white dark:bg-neutral-800", "rounded-lg p-6 text-center text-neutral-800 shadow-lg dark:text-gray-300 max-sm:p-3 max-sm:pt-5", "border-2 border-white focus:outline-none dark:border dark:border-gray-600", "max-sm:data-[state=open]:animate-contentShowSM", "max-sm:data-[state=closed]:animate-contentHideSM", "data-[state=open]:animate-contentShow", "data-[state=closed]:animate-contentHide"), children: [_jsx(RadixDialog.Title, { className: "mb-5 text-center text-2xl font-bold md:mb-6", children: "Delete File" }), _jsx("p", { className: "text-sm md:text-base", children: "Are you sure you want to delete this file?" }), _jsxs("blockquote", { className: "mt-3 rounded bg-red-600/20 p-3 text-xs font-bold text-red-500 md:mt-4 md:p-4 md:text-base", children: [_jsx("span", { className: "hidden md:inline-block", children: "\u26A0\uFE0F Caution\u00A0:\u00A0" }), _jsx("span", { className: "md:hidden", children: "\u26A0\uFE0F\u00A0" }), "File once deleted will be un-recoverable"] }), _jsxs("div", { className: "mt-4 flex flex-col-reverse items-center justify-between gap-4 text-sm sm:flex-row md:text-base", children: [_jsx(RadixDialog.Close, { asChild: true, children: _jsx("button", { className: "w-full rounded border px-4 py-3 font-bold md:py-2", children: "Cancel" }) }), _jsx("button", { className: cn("w-full rounded border px-4 py-3 font-bold md:py-2", "border-black bg-black text-white", "dark:border-white dark:bg-white dark:text-black", "whitespace-nowrap"), onClick: handleDelete, children: "Delete Permanently" })] })] })] })] }));
};
//# sourceMappingURL=DeletePostButton.js.map