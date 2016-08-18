namespace site {

  export interface INode {
    id: string | number;
    title: string;
    createPage: (routePar) => JSX.Element,
    path?: string;
    childs?: Array<INode>;
    parent?: INode;
    largeLogo?: boolean; //velke logo v chladici
    tab?: ITab; //pro top level node
  }
  export var root: INode;
  export var nodes: { [path: string]: INode; } = {};

  export function bootApp() {
    function initNode(parent: INode, nd: INode) {
      nd.childs = nodeChilds(nd);
      nd.parent = parent;
      nd.path = getNodePath(nd);
      if (nodes[nd.path]) throw new lib.Exception(`SiteMap node ${nd.path} already exists!`);
      nodes[nd.path] = nd;
      if (nd.childs) nd.childs.forEach(n => initNode(nd, n));
    }
    initNode(null, root);
  }

  export function nodeParents(nd: INode, ignoreSelf?: boolean): Array<INode> {
    var res: nodeParentsResult = {};
    nodeParentsLow(nd, res, ignoreSelf);
    return res.res.reverse();
  }

  export interface ITabs {
    childs?: Array<ITab>;
  }
  export interface ITab {
    title: string;
    rootNode?: INode;
  }
  export var tabs: ITabs;

  //*********** Private

  function nodeChilds(nd: INode): Array<INode> {
    var res: Array<INode> = null;
    for (var p in nd) {
      var subNd: INode = nd[p];
      if (!subNd || !subNd.title || !subNd.id) continue;
      if (!res) res = [subNd]; else res.push(subNd);
    }
    return res;
  }

  function nodeParentsLow(nd: INode, res: nodeParentsResult, ignoreSelf: boolean) {
    if (!res.res) res.res = ignoreSelf ? [] : [nd];
    while (nd.parent) { nd = nd.parent; res.res.push(nd); }
  }
  interface nodeParentsResult { res ?: Array<INode> }

  function getNodePath(nd: INode): string { return nodeParents(nd).map(n => n.id).join('|'); }
}