namespace inkluze {

    export interface ISubNode {
        id: string;
        createPage?: (par: any) => JSX.Element;
    }

    export interface INode {
        id: string;
        title?: string;
        brTitle?: string;
        largeLogo?: boolean;
        noTitle?: boolean;
        createPage?: (routePar: any) => JSX.Element;
        akreditace?: ISubNode;
        kurzyss?: ISubNode;
        kurzyii?: ISubNode;
        okurzy?: ISubNode;
        onas?: ISubNode;
    }

    export interface ISiteMap {
        root: INode;
    }

}