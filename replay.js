import { t } from "@replay/core";

export const create = (tag, props, ...children) => {
  // custom component
  if (typeof tag === "function") {
    return tag(props);
  }

  if (tag === "fragment") {
    // we need to flatmap incase child is also an array (such as JSX .maps)
    return children.flatMap((child) => {
      if (Array.isArray(child) && child.length === 0) {
        return null;
      }

      return child;
    });
  }

  // replay element
  return t[tag](props);
};

export const Fragment = "fragment";
