import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class WebComponentLit extends LitElement {
  static override styles = css`
    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 4rem;
      font-weight: 100;
    }
  `;

  @property() name = '';

  override render() {
    return html`
      <h1>Hello from Lit, ${this.name}!</h1>
      <button @click=${() => this._handleClick()} part="button">Click Me!</button>
      <slot></slot>
    `;
  }

  private _handleClick() {
    this.dispatchEvent(new CustomEvent('button-clicked', { detail:  'Hello from Lit!' }));
  }
}
