import { VFile } from "vfile";
type getParsedMarkdownProps = (content: string | undefined, gfmState: boolean, rrState: boolean) => VFile | null;
export declare const getParsedMarkdown: getParsedMarkdownProps;
export {};
