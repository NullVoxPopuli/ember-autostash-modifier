import { guidFor } from '@ember/object/internals';

export type Key = string | number;

export type Serializable =
  | undefined
  | null
  | string
  | boolean
  | number
  | object
  | Array<Serializable>;

export type LocalStorageValue = {
  value: Serializable;
}

export function keyFor(key: string | number, element?: Element | null) {
  return `__${guidFor(key)}-${guidFor(element)}__`;
}

export function isCheckbox(element?: Element | null): element is HTMLInputElement {
  if (!element) return false;

  return element.getAttribute('type') === 'checkbox';
}

export  function lookupFromLocalStorage(key: string) {
  let json = localStorage.getItem(key);

  if (json) {
    return (JSON.parse(json) as LocalStorageValue).value;
  }

  return undefined;
}

export function recordInlocalStorage(key: string, value: Serializable) {
  localStorage.setItem(key, JSON.stringify({ value }));
}
