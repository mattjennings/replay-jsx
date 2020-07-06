import { t } from "@replay/core";

const flatMap = (arr, fn) => arr.map(fn).reduce((x, y) => x.concat(y), []);

/**
 * Creates a Replay element from a JSX tag
 */
export const create = (tag, props, ...children) => {
  // custom component
  if (typeof tag === "function") {
    return tag(props);
  }

  if (tag === "fragment") {
    // we need to flatmap incase child is also an array (such as JSX .maps)
    return flatMap(children, (child) => {
      if (Array.isArray(child) && child.length === 0) {
        return null;
      }

      return !!child ? child : null;
    });
  }

  // replay element
  return t[tag](props);
};

export const Fragment = "fragment";

export default {
  create,
  Fragment,
};
