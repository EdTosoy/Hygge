import { mount } from "cypress/react";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React component into the DOM.
       * @param jsx {React.ReactNode} The React component to mount.
       * @param options {MountOptions} [options={}] options to pass to the mount function.
       * @param rerenderKey {string} [rerenderKey] A key to use to force a rerender.
       * @see {@link https://on.cypress.io/mounting-react} for more details.
       * @example
       * import { mount } from '@cypress/react'
       * import { Stepper } from './Stepper'
       *
       * it('mounts', () => {
       *   mount(<StepperComponent />)
       *   cy.get('[data-cy=increment]').click()
       *   cy.get('[data-cy=counter]').should('have.text', '1')
       * }
       */
      mount: typeof mount;
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
      /**
       * Custom command to type a few random words into input elements
       * @param count=3
       * @example cy.get('input').typeRandomWords()
       */
      typeRandomWords(
        count?: number,
        options?: Partial<TypeOptions>,
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}
