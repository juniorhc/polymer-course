import { LitElement, html } from '@polymer/lit-element'
import './add-item';
import './list-items';

class TodoApp extends LitElement {
    static get properties() {
        return {
            todoList: Array
        }
    }
    constructor() {
        super();
        let list = JSON.parse(localStorage.getItem('todo-list'));
        this.todoList = list === null ? [] : list;


        this.addEventListener('addItem', (e) => {
            this.todoList = e.detail.todoList;
        });

    }

    _firstRendered() {
        this.addEventListener('addItem', (e) => {
            this.todoList = e.detail.todoList;
        });
    }

    render() {
        return html`
        <p> Hello todo app </p>
        <add-item></add-item>
        <list-items .todoList=${this.todoList}> </list-items>
        `;
    }

}
customElements.define('todo-app', TodoApp);