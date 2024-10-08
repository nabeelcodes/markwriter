import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../lib/classNameHelper";
export const SidebarButton = forwardRef(({ children, className, onMobile, ...otherProps }, forwardedRef) => {
    return (_jsx("button", { ...otherProps, ref: forwardedRef, className: cn(className, "grid aspect-square h-12 place-content-center rounded-full border shadow-md dark:border-neutral-600 xl:rounded xl:shadow-sm", "hover:xl:shadow-md dark:hover:xl:shadow-gray-700", {
            "border-none shadow-none": onMobile,
        }), children: children }));
});
//# sourceMappingURL=SidebarButton.js.map