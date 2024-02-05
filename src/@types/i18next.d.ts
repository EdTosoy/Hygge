import ns1 from "../locales/en/ns1.json";
import ns2 from "../locales/en/ns2.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "ns1";
    resources: {
      ns1: typeof ns1;
      ns2: typeof ns2;
    };
  }
}
