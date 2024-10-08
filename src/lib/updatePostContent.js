export const updatePostContent = (appData, pageId, updatedPostContent) => {
    const currentPost = appData?.find((post) => post.id === pageId);
    const filteredAppData = appData?.filter((post) => post.id !== pageId);
    if (!pageId || !currentPost)
        return appData;
    const updatedCurrentPost = {
        ...currentPost,
        content: updatedPostContent,
    };
    return [...filteredAppData, updatedCurrentPost];
};
//# sourceMappingURL=updatePostContent.js.map