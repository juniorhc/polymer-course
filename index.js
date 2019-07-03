import {LitElement, html} from '@polymer/lit-element';
import '@polymer/paper-checkbox/paper-checkbox.js';

class MyElement extends LitElement {

 static get properties() {
   return {
     feeling: String
   }
 }

 _render({feeling}) {
   return html`<h1>Polymer is ${feeling}<h1>
   <paper-checkbox>Ready to deploy</paper-checkbox>`
 }
}

customElements.define('my-element', MyElement);