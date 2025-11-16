import type { defaultNS, resources } from "../features/lang/i18n";

type NamespaceKeys<T> = {
  [K in keyof T]: keyof T[K] extends string
    ? `${K & string}:${keyof T[K] & string}`
    : never;
}[keyof T];

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)["en"];
  }
}
