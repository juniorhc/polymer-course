import { LitElement, html } from '@polymer/lit-element'

class AddItem extends LitElement {
    static get properties() {
        return {
            todoList: Array,
            todoItem: String
        }
    }

    constructor() {
        super();
        this.todoItem = ''; //F5 we going to lose this data.
        //we need to use localstorage to store data
    }

    inputKeypress(e) {
        if (e.keyCode == 13) {
            //call add item function
        } else {
            this.todoItem = e.target.value;
        }
        console.log(this.todoItem);
    }

    onAddItem() {

        if (this.todoItem.length > 0) {
            let storedTodoList = JSON.parse(localStorage.getItem('todo-list'));
            storedTodoList = storedTodoList === null ? [] : storedTodoList;

            storedTodoList.push(
                {
                    id: new Date().valueOf(),
                    item: this.todoItem,
                    done: false
                }
            )

            localStorage.setItem('todo-list', JSON.stringify(storedTodoList));
            this.todoItem = '';
        }
    }

    render() {
        return html`
        <div>
            <input value = ${this.todoItem}
                @keypress="${(e) => this.inputKeypress(e)}" />
            </input>
            <button @click="${this.onAddItem}"> Add Item </button>
        </div>
        `;

    }
}

customElements.define('add-item', AddItem);