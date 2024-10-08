import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { postStyleAtom } from "../../store/appState";
import { DeletePostButton } from "./DeletePostButton";
import { cn } from "../../lib/classNameHelper";
export const PostItem = memo(({ postId, dateToDisplay, titleToDisplay }) => {
    const [postStyle] = useAtom(postStyleAtom);
    const isGridMode = postStyle === "grid";
    return (_jsxs("li", { className: cn("popOnHover", "flex items-center justify-between", "rounded-lg border border-gray-200 text-neutral-800 shadow-sm", "dark:border-neutral-600 dark:text-gray-300", {
            "relative block": isGridMode,
        }), children: [_jsxs(Link, { to: `/${postId}`, className: cn("block w-full p-4", {
                    "px-4 pb-24 pt-4": isGridMode,
                }), children: [_jsx("h2", { className: cn("overflow-x-hidden text-ellipsis whitespace-nowrap text-lg font-bold", "max-w-[23ch] sm:max-w-[44ch] md:max-w-[54ch] lg:max-w-[76ch]", {
                            "max-w-[20ch]": isGridMode,
                        }), children: titleToDisplay }), _jsx("p", { className: "mt-1 text-sm opacity-70", children: dateToDisplay })] }, postId), _jsx(DeletePostButton, { isGridMode: isGridMode, postId: postId })] }));
});
//# sourceMappingURL=PostItem.js.map