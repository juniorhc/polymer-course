import {LitElement, html} from '@polymer/lit-element'

class AddItem extends LitElement{

    static get properties() {
        return {
            todoList: Array,
            todoItem: String
        }
    }

    constructor(){
        super();
        this.todoItem = '';
    }

    inputKeypress(e){
        if(e.keyCode == 13){
            //call add item function
        } else {
            this.todoItem = e.target.value;
        }
        console.log(this.todoItem);
    }

    render(props){
        return html`
        <div>
            <input value=${props.todoItem}
            on-keyup="${(e) => this.inputKeypress(e)}" >
            </input>
        </div>
        
        `;
    }
}

customElements.define('add-item', AddItem);