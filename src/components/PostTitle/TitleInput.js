import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import { memo, useState } from "react";
import { useAtom } from "jotai";
import { Close } from "@radix-ui/react-dialog";
import { appDataAtom, dialogStateAtom } from "../../store/appState";
import { cn } from "../../lib/classNameHelper";
import { getCurrentPost } from "../../lib/getCurrentPost";
export const TitleInput = memo(() => {
    const { id: currentPageId } = useParams();
    const [appData, setAppData] = useAtom(appDataAtom);
    const [, setOpenRadixDialog] = useAtom(dialogStateAtom);
    const currentPageTitle = getCurrentPost(appData, currentPageId)?.title ?? "";
    const [valueOfTitle, setValueOfTitle] = useState(currentPageTitle);
    const [blankTitle, setBlankTitle] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const handleChangeForTitleRename = (e) => {
        const updatedTitle = e?.target?.value;
        const updatedTitleIsEmpty = updatedTitle.trim() === "";
        if (updatedTitle === currentPageTitle || updatedTitleIsEmpty) {
            setButtonDisabled(true);
        }
        else {
            setButtonDisabled(false);
        }
        if (updatedTitleIsEmpty) {
            setBlankTitle(true);
        }
        else {
            setBlankTitle(false);
        }
        setValueOfTitle(updatedTitle);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const valueOfAppData = [...appData];
        const indexOfCurrentPost = valueOfAppData.findIndex((element) => element?.id === currentPageId);
        if (valueOfAppData[indexOfCurrentPost].title && valueOfTitle) {
            valueOfAppData[indexOfCurrentPost].title = valueOfTitle;
        }
        setAppData(valueOfAppData);
        setButtonDisabled(true);
        setOpenRadixDialog(false);
    };
    return (_jsxs("form", { onSubmit: handleFormSubmit, children: [_jsx("input", { className: cn("w-[300px] min-w-max rounded border bg-inherit px-4 py-2 outline-none focus:border-gray-500 dark:border-gray-500  dark:focus:border-gray-300 md:w-[500px]", {
                    "border-red-600 focus:border-red-600 dark:border-red-600 dark:focus:border-red-600": blankTitle,
                }), autoFocus: true, id: "title", name: "title", type: "text", "aria-label": "input box to rename file title", value: valueOfTitle, onChange: handleChangeForTitleRename, onFocus: () => {
                    const radixContent = document.querySelector(".radix-modal");
                    radixContent?.classList?.add("shiftUp");
                }, onBlur: () => {
                    const radixContent = document.querySelector(".radix-modal");
                    radixContent?.classList?.remove("shiftUp");
                } }), _jsx("span", { className: cn("mt-1 block text-xs font-bold text-red-500 opacity-0", {
                    "opacity-100": blankTitle,
                }), children: "* Title cannot be empty or only spaces" }), _jsxs("div", { className: "mt-2 flex items-center justify-between gap-4 md:w-[500px]", children: [_jsx(Close, { asChild: true, children: _jsx("button", { className: "w-full rounded border py-2 font-bold", "aria-label": "Close Button", type: "button", onClick: () => setValueOfTitle(currentPageTitle), children: "Cancel" }) }), _jsx("button", { className: cn("w-full rounded border border-black bg-neutral-800 py-2 font-bold text-gray-300 dark:bg-gray-300 dark:text-neutral-800", {
                            "border-neutral-500 bg-neutral-500 dark:bg-neutral-500": buttonDisabled,
                        }), type: "submit", "aria-label": "Rename Button", disabled: buttonDisabled, children: "Rename" })] })] }));
});
//# sourceMappingURL=TitleInput.js.map