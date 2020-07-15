import { t } from '@replay/core'

const flatMap = (arr, fn) => arr.map(fn).reduce((x, y) => x.concat(y), [])

/**
 * Creates a Replay element from a JSX tag
 */
export const create = (tag, props = {}, ...children) => {
  // custom component
  if (typeof tag === 'function') {
    return tag({ ...props, children })
  }

  if (tag === 'fragment') {
    // we need to flatmap incase child is also an array (such as JSX .maps)
    return flatMap(children, (child) => {
      if (Array.isArray(child) && child.length === 0) {
        return null
      }

      return !!child ? child : null
    })
  }

  // replay component
  const el = t[tag]

  if (!el) {
    throw new Error(`Element "${tag}" is not a valid Replay component`)
  }

  return el(props)
}

export const Fragment = 'fragment'

export default {
  create,
  Fragment,
}
