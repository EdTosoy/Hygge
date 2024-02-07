import { IonIconProperties } from "./ionIcon";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": IonIconProperties;
    }
  }
}
