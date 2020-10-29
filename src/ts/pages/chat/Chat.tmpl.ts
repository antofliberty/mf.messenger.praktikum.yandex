export const chat = `
<div class="wrapper">
    <div class="app">
        {{{ head }}}
            <div class="dialog-wrapper">
                <div class="dialog">
                {{#each messages}}
                    <div class="dialog__message {{#if (isNotYou this.author)}}dialog__message--opponent{{/if}}">
                        <p class="dialog__message__author {{#if (isNotYou this.author)}}dialog__message__author--opponent{{/if}}">
                            {{this.author}}
                        </p>
                        <p class="dialog__message__content {{#if (isNotYou this.author)}}dialog__message__content--opponent{{/if}}">{{this.message}}</p>
                    </div>
                {{/each}}
                </div>
                <div class="dialog__tools-wrapper">
                    <div class="dialog__tools">
                        <img src="/static/skrepka.svg" width="30px" alt="">
                        <input type="text" class="dialog__tools__text">
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
            <div class="contacts-wrapper">
                <div class="contacts">
                    {{#each contacts}}
                        <div class="contact">
                            <div>
                                <img src="https://dummyimage.com/40x40/777/fff&text={{this.id}}" alt="Аватарка">
                            </div>
                            <span class="contact__name">&nbsp;{{this.name}}</span>
                        </div>
                    {{/each}}
                </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</div>
`
export default chat