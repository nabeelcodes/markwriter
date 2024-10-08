import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { appDataAtom } from "../../store/appState";
import { getCurrentPost } from "../../lib/getCurrentPost";
import { countWords } from "../../lib/countWords";
import { getReadingTime } from "../../lib/getReadingTime";
export const ReadingTime = () => {
    const { id: pageId } = useParams();
    const [appData] = useAtom(appDataAtom);
    const contentToParse = getCurrentPost(appData, pageId)?.content;
    const numberOfWords = countWords(contentToParse);
    const readingTime = getReadingTime(numberOfWords, {
        wordsPerMinute: 200,
    });
    return (_jsxs("article", { className: "hidden md:block", children: ["Reading Time : ", _jsx("span", { className: "text-green-500", children: readingTime })] }));
};
//# sourceMappingURL=ReadingTime.js.map