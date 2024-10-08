export const insertTabForTextarea = (event, tabInputHandler) => {
    event.preventDefault();
    const textArea = event.target;
    const { selectionStart, selectionEnd } = textArea;
    const newTextareaContent = textArea.value.substring(0, selectionStart) +
        "  " +
        textArea.value.substring(selectionEnd, textArea.value.length);
    textArea.focus();
    textArea.value = newTextareaContent;
    textArea.setSelectionRange(selectionStart + 2, selectionStart + 2);
    tabInputHandler(newTextareaContent);
};
//# sourceMappingURL=tabHelper.js.map