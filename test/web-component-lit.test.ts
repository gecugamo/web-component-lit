import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { WebComponentLit } from '../src/WebComponentLit.js';
import '../src/web-component-lit.js';

describe('WebComponentLit', () => {
  it('has a name', async () => {
    const el = await fixture<WebComponentLit>(html`<web-component-lit name="Gary"></web-component-lit>`);

    expect(el.name).to.equal('Gary');
  });
});
