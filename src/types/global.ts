import { IonIconProperties } from "./ionIcon.ts";
import { mount } from "cypress/react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": IonIconProperties;
    }
  }

  // Augment the Cypress namespace to include type definitions for
  // your custom command.
  // Alternatively, can be defined in cypress/support/component.d.ts
  // with a <reference path="./component" /> at the top of your spec.
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
