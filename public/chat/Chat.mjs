import ChatTemplate from './Chat.tmpl.mjs'
import HeadTemplate from "./head/ChatHead.tmpl.mjs"

Handlebars.registerHelper('isNotYou', function (value) {
    return value !== "Вы";
});

let template = Handlebars.compile(ChatTemplate);
let head = Handlebars.compile(HeadTemplate);

let data = {
    user: "Mikhail Egorov",
    contacts: [
        {id:'1', name:"Вася"},
        {id:'2', name:"Коля"},
        {id:'3', name: "Женя"}
    ]
}
let messages = [
    {
        author: "Женя",
        message: "123"
    },
    {
        author: "Вы",
        message: "321"
    },
]

const root = document.getElementById("app");
root.innerHTML = template({
    head: head({
        login: data.user
    }),
    contacts: data.contacts,
    messages: messages
})


export default template