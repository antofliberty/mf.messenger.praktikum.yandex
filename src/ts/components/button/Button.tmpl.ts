import Block from "../../utils/Block/Block"
export const ReusableButton = `
<button class="mx-auto" type="submit">{{title}}</button>`


class Button extends Block {
    render() {
        return Handlebars.compile(ReusableButton);
    }
}

export default ReusableButton
