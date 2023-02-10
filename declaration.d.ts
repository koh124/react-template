type interfaceClassNames = Record<string, string>;

declare module "*.css" {
  const classNames: interfaceClassNames;
  export = classNames;
}

declare module "*.scss" {
  const classNames: interfaceClassNames;
  export = classNames;
}

declare module "*.sass" {
  const classNames: interfaceClassNames;
  export = classNames;
}
