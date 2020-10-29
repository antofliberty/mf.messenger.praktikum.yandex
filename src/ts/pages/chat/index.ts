import ChatTemplate from "./Chat.tmpl.js";
import HeadTemplate from "./ChatHead.tmpl.js";


Handlebars.registerHelper("isNotYou", function (value) {
    return value !== "Вы";
});

const template = Handlebars.compile(ChatTemplate);
const head = Handlebars.compile(HeadTemplate);

const data = {
    user: "Mikhail Egorov",
    contacts: [
        { id:"1", name: "Вася" },
        { id:"2", name: "Коля" },
        { id:"3", name: "Женя" }
    ]
};

const messages = [
    {
        author: "Женя",
        message: "123"
    },
    {
        author: "Вы",
        message: "321"
    },
];

const root = document.getElementById("app");

if (root) {
    root.innerHTML = template({
        head: head({
            login: data.user
        }),
        contacts: data.contacts,
        messages: messages
    });
}

export default template