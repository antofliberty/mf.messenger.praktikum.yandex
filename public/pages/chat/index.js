import ChatTemplate from "./Chat.tmpl.js";
import HeadTemplate from "./ChatHead.tmpl.js";
Handlebars.registerHelper('isNotYou', function (value) {
    return value !== "Вы";
});
var template = Handlebars.compile(ChatTemplate);
var head = Handlebars.compile(HeadTemplate);
var data = {
    user: "Mikhail Egorov",
    contacts: [
        { id: '1', name: "Вася" },
        { id: '2', name: "Коля" },
        { id: '3', name: "Женя" }
    ]
};
var messages = [
    {
        author: "Женя",
        message: "123"
    },
    {
        author: "Вы",
        message: "321"
    },
];
var root = document.getElementById("app");
// @ts-ignore
root.innerHTML = template({
    head: head({
        login: data.user
    }),
    contacts: data.contacts,
    messages: messages
});
export default template;
//# sourceMappingURL=index.js.map