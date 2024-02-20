import { newSpecPage } from '@stencil/core/testing';
import { NameComponent } from '.';

describe('name-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [NameComponent],
      html: '<name-component></name-component>',
    });
    expect(root).toEqualHtml(`
      <name-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </name-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [NameComponent],
      html: `<name-component first="Stencil" last="'Don't call me a framework' JS"></name-component>`,
    });
    expect(root).toEqualHtml(`
      <name-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </name-component>
    `);
  });
});
