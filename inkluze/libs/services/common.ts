namespace services {
  export interface serviceOUT {
    error:string;
  }

  export function callRequest<TIN, TOUT extends serviceOUT>(methodPath:string, inPar: TIN): Promise<TOUT> {
    return new Promise((resolve, reject) => {
      debugger;
      var xmlhttp = new XMLHttpRequest();
      var url = `${methodPath}/service.ashx?`;
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          if (xmlhttp.status == 200) {
            try {
              var resp = xmlhttp.responseText;
              var res: TOUT = resp ? JSON.parse(resp) : null;
              var error = res ? res.error : null;
              if (error) reject(error); else resolve(res);
            } catch (msg) {
              reject(`JSON exception ${msg} at ${url}`);
            }
          } else
            reject(`Status ${xmlhttp.status} at ${url}`);
        }
      };
      xmlhttp.open('POST', url, true);
      xmlhttp.send(inPar ? JSON.stringify(inPar, null, 2) : '');
    });
  }
}