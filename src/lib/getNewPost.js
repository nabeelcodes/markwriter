export class File {
    id;
    title;
    content;
    date;
    constructor() {
        this.id = String(Date.now());
        this.title = "Project Title";
        this.content = "";
        this.date = `${String(new Date()).substring(4, 10)}, ${String(new Date()).substring(10, 15)}`;
    }
}
//# sourceMappingURL=getNewPost.js.map