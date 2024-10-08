export const downloadFile = (file) => {
    if (!file)
        return;
    const fileTitle = file.title;
    const markdownToDownload = file.content;
    const blob = new Blob([markdownToDownload], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${fileTitle}.md`;
    link.click();
    setTimeout(() => {
        URL.revokeObjectURL(link.href);
    }, 100);
};
//# sourceMappingURL=downloadFile.js.map