import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAtom } from "jotai";
import { appDataAtom, postStyleAtom } from "../../store/appState";
import { ListStylePicker } from "./ListStylePicker";
import { PostItem } from "./PostItem";
import { cn } from "../../lib/classNameHelper";
export const PostList = () => {
    const [appData] = useAtom(appDataAtom);
    const [postStyle] = useAtom(postStyleAtom);
    const isGridMode = postStyle === "grid";
    const sortedAppData = [...appData]
        .sort((a, b) => a.id.localeCompare(b.id))
        .reverse();
    return (_jsxs("section", { className: "mb-8", children: [_jsx(ListStylePicker, { isGridMode: isGridMode }), _jsx("ul", { className: cn("mt-4 flex flex-col gap-y-4 rounded-lg", {
                    "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4": isGridMode,
                }), children: sortedAppData.map(({ id, title, date }) => (_jsx(PostItem, { postId: id, dateToDisplay: date, titleToDisplay: title }, id))) })] }));
};
//# sourceMappingURL=PostList.js.map