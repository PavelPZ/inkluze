﻿namespace lib {
  export class Exception extends Error {
    constructor(msg: string) {
      super(msg);
      debugger;
      console.error(msg);
    }
  }
  export class ENotImplemented extends Exception {
    constructor(msg?: string) { super(`Missing ${msg} override`); }
  }
  export type TCallback = () => void;

  export function getClassName(constructor: Function): string {
    let res = constructor['name']; if (res) return res;
    let arr = constructor.toString().match(/function\s*(\w+)/);
    return arr && arr.length == 2 ? arr[1] : undefined;
  }

  export function noop() { }

  export interface IComponentProps extends React.HTMLAttributes {
    children?: React.ReactNode;
    key?: any;
  }

  export function navigateExt(url: string, title: string, newWindow?: boolean): JSX.Element {
    return <a href={url} target={newWindow ? '_blank' : '_self'}><i className='fa fa-external-link'></i> {title}</a>;
  }

  //http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
  //https://en.wikipedia.org/wiki/List_of_hash_functions
  /**
 * Calculate a 32 bit FNV-1a hash
 * Found here: https://gist.github.com/vaiorabbit/5657561
 * Ref.: http://isthe.com/chongo/tech/comp/fnv/
 *
 * @param {string} str the input value
 * @param {boolean} [asString=false] set to true to return the hash value as 
 *     8-digit hex string instead of an integer
 * @param {integer} [seed] optionally pass the hash of the previous chunk
 * @returns {integer | string}
 */
  export function hash(str: string, asString?: boolean, seed?: number): string | number {
    /*jshint bitwise:false */
    let i, l, hval = (seed === undefined) ? 0x811c9dc5 : seed;

    for (i = 0, l = str.length; i < l; i++) {
      hval ^= str.charCodeAt(i);
      hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    if (asString) return ("0000000" + (hval >>> 0).toString(16)).substr(-8); // Convert to 8 digit hex string
    else return hval >>> 0;
  }


  //D:\LMCom\rew\Web4.sln, d:\LMCom\rew\angular-definitelytyped\angular2\src\compiler\util.ts
  var CAMEL_CASE_REGEXP = /([A-Z])/g;
  var DASH_CASE_REGEXP = /-([a-z])/g;
  export function camelCaseToDashCase(input: string): string { return replaceAllMapped(input, CAMEL_CASE_REGEXP, m => '-' + m[1].toLowerCase()); }
  export function dashCaseToCamelCase(input: string): string { return replaceAllMapped(input, DASH_CASE_REGEXP, m => m[1].toUpperCase()); }

  //D:\LMCom\rew\Web4.sln, d:\LMCom\rew\angular-definitelytyped\angular2\src\facade\lang.ts
  function replaceAllMapped(s: string, from: RegExp, cb: Function): string {
    return s.replace(from, function (...matches) {
      // Remove offset & string from the result array
      matches.splice(-2, 2);
      // The callback receives match, p1, ..., pn
      return cb(matches);
    });
  }

}