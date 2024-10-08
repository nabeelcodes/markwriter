export const getCurrentPost = (appData, pageId) => {
    const currentPost = appData?.find((post) => post.id === pageId);
    return currentPost;
};
//# sourceMappingURL=getCurrentPost.js.map