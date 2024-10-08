declare const sanitizeSchema: {
    attributes: {
        code: (string | string[] | [string, ...(RegExp | import("hast-util-sanitize/lib").PrimitivePropertyValue)[]])[];
        span: (string | string[] | [string, ...(RegExp | import("hast-util-sanitize/lib").PrimitivePropertyValue)[]])[];
    };
    required?: Record<string, Record<string, string | number | boolean | (string | number)[] | null | undefined>> | undefined;
    tagNames?: string[] | undefined;
    protocols?: Record<string, string[]> | undefined;
    ancestors?: Record<string, string[]> | undefined;
    clobber?: string[] | undefined;
    clobberPrefix?: string | undefined;
    strip?: string[] | undefined;
    allowComments?: boolean | undefined;
    allowDoctypes?: boolean | undefined;
};
export default sanitizeSchema;
