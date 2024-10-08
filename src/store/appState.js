import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
export const themeAtom = atomWithStorage("theme", "light");
export const appDataAtom = atomWithStorage("appData", []);
export const dialogStateAtom = atom(false);
export const postStyleAtom = atom("grid");
export const GFMAtom = atom(true);
export const RRAtom = atom(true);
export const visibilityAtom = atom({
    editingPaneVisibility: true,
    markdownPaneVisibility: true,
});
//# sourceMappingURL=appState.js.map