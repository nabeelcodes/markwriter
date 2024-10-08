import clsx from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...classes) => {
    return twMerge(clsx(...classes));
};
//# sourceMappingURL=classNameHelper.js.map