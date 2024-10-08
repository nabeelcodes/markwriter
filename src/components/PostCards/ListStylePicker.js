import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAtom } from "jotai";
import { postStyleAtom } from "../../store/appState";
import { GridIconSVG } from "../../assets/GridIconSVG";
import { ListIconSVG } from "../../assets/ListIconSVG";
import { cn } from "../../lib/classNameHelper";
export const ListStylePicker = ({ isGridMode }) => {
    const [, setPostStyle] = useAtom(postStyleAtom);
    return (_jsxs("div", { className: "mt-6 flex items-center justify-end gap-2", children: [_jsx("button", { className: cn("rounded border p-2 dark:border-neutral-600", {
                    "bg-black/10 dark:bg-neutral-700": !isGridMode,
                }), onClick: () => setPostStyle("list"), children: _jsx(ListIconSVG, {}) }), _jsx("button", { className: cn("rounded border p-2 dark:border-neutral-600", {
                    "bg-black/10 dark:bg-neutral-700": isGridMode,
                }), onClick: () => setPostStyle("grid"), children: _jsx(GridIconSVG, {}) })] }));
};
//# sourceMappingURL=ListStylePicker.js.map