export const handleMousemove = (event, targetRef, { offsetX, offsetY }) => {
    if (targetRef?.current) {
        targetRef.current.style.left = `${event.clientX + offsetX}px`;
        targetRef.current.style.top = `${event.clientY + offsetY}px`;
    }
};
//# sourceMappingURL=mouseMoveHelper.js.map