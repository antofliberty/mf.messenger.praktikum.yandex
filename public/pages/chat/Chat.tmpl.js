export var chat = "\n<div class=\"wrapper\">\n    <div class=\"app\">\n        {{{ head }}}\n            <div style=\"float:left; width:70%\">\n                <div class=\"dialog\">\n                {{#each messages}}\n                    <div class=\"dialog__message {{#if (isNotYou this.author)}}dialog__message--opponent{{/if}}\">\n                        <p class=\"dialog__message__author {{#if (isNotYou this.author)}}dialog__message__author--opponent{{/if}}\">\n                            {{this.author}}\n                        </p>\n                        <p class=\"dialog__message__content {{#if (isNotYou this.author)}}dialog__message__content--opponent{{/if}}\">{{this.message}}</p>\n                    </div>\n                {{/each}}\n                </div>\n                <div class=\"dialog__tools\">\n                    <div style=\"padding: 5px;display: flex;\">\n                        <img src=\"/static/skrepka.svg\" width=\"30px\" alt=\"\">\n                        <input type=\"text\" style=\"width: 80%;margin: 0 7px;\">\n                        <button>\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n                    </div>\n                </div>\n            </div>\n            <div style=\"float:right; width: 29.85%; border-left: 1px solid #454138b0;\">\n                <div class=\"contacts\">\n                    {{#each contacts}}\n                        <div class=\"contact\">\n                            <div>\n                                <img src=\"https://dummyimage.com/40x40/777/fff&text={{this.id}}\" alt=\"\u0410\u0432\u0430\u0442\u0430\u0440\u043A\u0430\">\n                            </div>\n                            <span style=\"line-height: 40px;\">&nbsp;{{this.name}}</span>\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n        <div class=\"footer\"></div>\n    </div>\n</div>\n";
export default chat;
//# sourceMappingURL=Chat.tmpl.js.map