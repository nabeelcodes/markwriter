import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import sanitizeSchema from "./sanitizeSchema";
export const getParsedMarkdown = (content, gfmState, rrState) => {
    if (!content)
        return null;
    const parsedContent = unified()
        .use(remarkParse)
        .use(remarkRehype, {
        allowDangerousHtml: rrState,
    })
        .use(rehypeHighlight, {
        detect: false,
        ignoreMissing: true,
    })
        .use(gfmState ? remarkGfm : null)
        .use(rehypeRaw)
        .use(rehypeSanitize, sanitizeSchema)
        .use(rehypeStringify)
        .processSync(content);
    return parsedContent;
};
//# sourceMappingURL=getParsedMarkdown.js.map