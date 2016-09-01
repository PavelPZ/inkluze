namespace lib {
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
    return <a href={ url } target={newWindow ? '_blank' : '_self'}>{title}</a>;
  }

  export function callServer(method: string, par: {}): Promise<{}> {
    return new Promise((resolve, reject) => {
      var xmlhttp = new XMLHttpRequest();
      var url = `server/${method}.ashx?`;
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          if (xmlhttp.status == 200) {
            try {
              var resp = xmlhttp.responseText;
              var res: number = resp ? JSON.parse(resp) : null;
              var error = res  ? res['error'] : null;
              if (error) reject(error); else resolve(res);
            } catch (msg) {
              reject(`JSON exception ${msg} at ${url}`);
            }
          } else
            reject(`Status ${xmlhttp.status} at ${url}`);
        }
      };
      xmlhttp.open('POST', url, true);
      xmlhttp.send(par ? JSON.stringify(par, null, 2) : '');
    });
  }

}