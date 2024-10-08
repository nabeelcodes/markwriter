import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";
import { SidebarButton } from "./SidebarButton";
import { CloseIconMobileSidebar } from "../../assets/CloseIconSVG";
import { MenuIcon } from "../../assets/MenuIconSVG";
import { GFMButton } from "./GFMButton";
import { RRButton } from "./RRButton";
import { DownloadButton } from "./DownloadButton";
import { ClearAllButton } from "./ClearAllButton";
import { cn } from "../../lib/classNameHelper";
const MenuButton = forwardRef((props, forwardedRef) => {
    return (_jsx(SidebarButton, { ...props, ref: forwardedRef, className: "md:frosted-glass-bg bg-white dark:bg-neutral-800", children: props["data-state"] === "open" ? (_jsx(CloseIconMobileSidebar, {})) : (_jsx(MenuIcon, {})) }));
});
export const MobileSidebarMenu = () => {
    return (_jsxs(RadixDropdownMenu.Root, { children: [_jsx(RadixDropdownMenu.Trigger, { asChild: true, children: _jsx(MenuButton, {}) }), _jsx(RadixDropdownMenu.Portal, { children: _jsxs(RadixDropdownMenu.Content, { align: "end", className: cn("md:frosted-glass-bg", "absolute bottom-16 right-0 z-20 flex flex-col gap-y-2 rounded-full border bg-white py-2 shadow-md dark:border-neutral-600 dark:bg-neutral-800", "data-[state=closed]:animate-menuHide data-[state=open]:animate-menuReveal"), children: [_jsx(RadixDropdownMenu.Item, { asChild: true, onSelect: (event) => event.preventDefault(), children: _jsx(GFMButton, { onMobile: true }) }), _jsx(RadixDropdownMenu.Item, { asChild: true, onSelect: (event) => event.preventDefault(), children: _jsx(RRButton, { onMobile: true }) }), _jsx(RadixDropdownMenu.Item, { asChild: true, children: _jsx(DownloadButton, { onMobile: true }) }), _jsx(RadixDropdownMenu.Item, { asChild: true, onSelect: (event) => event.preventDefault(), children: _jsx(ClearAllButton, { onMobile: true }) })] }) })] }));
};
//# sourceMappingURL=MobileSidebarMenu.js.map