import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { appDataAtom } from "../../store/appState";
import { getCurrentPost } from "../../lib/getCurrentPost";
import { countWords } from "../../lib/countWords";
export const WordCount = () => {
    const { id: pageId } = useParams();
    const [appData] = useAtom(appDataAtom);
    const contentToParse = getCurrentPost(appData, pageId)?.content;
    const numberOfWords = countWords(contentToParse);
    return (_jsxs("article", { children: ["Words : ", _jsx("span", { className: "text-green-500", children: numberOfWords })] }));
};
//# sourceMappingURL=WordCount.js.map