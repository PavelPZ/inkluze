namespace lib {
  export class Exception extends Error {
    constructor(msg: string) {
      super(msg);
      debugger;
      console.error(msg);
    }
  }
  export class ENotImplemented extends Exception {
    constructor(msg: string) { super(`Missing ${msg} override`); }
  }
  export type TCallback = () => void;

  export function getClassName(constructor: Function): string {
    let res = constructor['name']; if (res) return res;
    let arr = constructor.toString().match(/function\s*(\w+)/);
    return arr && arr.length == 2 ? arr[1] : undefined;
  }

  export function noop() { }

  export interface IComponentProps {
    children?: React.ReactNode;
  }

}