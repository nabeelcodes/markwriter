import React from "react";
type SidebarButtonProps = React.ComponentPropsWithRef<"button"> & {
    children: React.ReactNode;
    className?: string;
    onMobile?: boolean;
};
export declare const SidebarButton: React.ForwardRefExoticComponent<Omit<SidebarButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export {};
