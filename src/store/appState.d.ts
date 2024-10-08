export declare const themeAtom: import("jotai").WritableAtom<"light" | "dark", ["light" | "dark" | typeof import("jotai/utils").RESET | ((prev: "light" | "dark") => "light" | "dark" | typeof import("jotai/utils").RESET)], void>;
export declare const appDataAtom: import("jotai").WritableAtom<Post[], [typeof import("jotai/utils").RESET | Post[] | ((prev: Post[]) => typeof import("jotai/utils").RESET | Post[])], void>;
export declare const dialogStateAtom: import("jotai").PrimitiveAtom<boolean> & {
    init: boolean;
};
export declare const postStyleAtom: import("jotai").PrimitiveAtom<"list" | "grid"> & {
    init: "list" | "grid";
};
export declare const GFMAtom: import("jotai").PrimitiveAtom<boolean> & {
    init: boolean;
};
export declare const RRAtom: import("jotai").PrimitiveAtom<boolean> & {
    init: boolean;
};
export declare const visibilityAtom: import("jotai").PrimitiveAtom<{
    editingPaneVisibility: boolean;
    markdownPaneVisibility: boolean;
}> & {
    init: {
        editingPaneVisibility: boolean;
        markdownPaneVisibility: boolean;
    };
};
