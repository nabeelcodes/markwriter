import React from "react";
type funcProps = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, targetRef: React.RefObject<HTMLSpanElement>, offset: {
    offsetX: number;
    offsetY: number;
}) => void;
export declare const handleMousemove: funcProps;
export {};
