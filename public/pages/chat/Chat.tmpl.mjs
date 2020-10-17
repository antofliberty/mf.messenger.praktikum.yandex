export const chat = `
<div class="wrapper">
    <div class="app">
        {{{ head }}}
            <div style="float:left; width:70%">
                <div class="dialog">
                {{#each messages}}
                    <div class="dialog__message {{#if (isNotYou this.author)}}dialog__message--opponent{{/if}}">
                        <p class="dialog__message__author {{#if (isNotYou this.author)}}dialog__message__author--opponent{{/if}}">
                            {{this.author}}
                        </p>
                        <p class="dialog__message__content">{{this.message}}</p>
                    </div>
                {{/each}}
                </div>
                <div class="dialog__tools">
                    <div style="padding: 5px;display: flex;">
                        <img src="/static/skrepka.svg" width="30px" alt="">
                        <input type="text" style="width: 80%;margin: 0 7px;">
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
            <div style="float:right; width: 30%">
                <div class="contacts">
                    {{#each contacts}}
                        <div class="contact">
                            <div>
                                <img src="https://dummyimage.com/40x40/777/fff&text={{this.id}}" alt="Аватарка">
                            </div>
                            <span style="line-height: 40px;">&nbsp;{{this.name}}</span>
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