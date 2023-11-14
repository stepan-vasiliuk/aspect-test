export type TButtonProps = {
    caption: string,
    width: number,
    height: number,
    visible: boolean,
}

export type TLabelProps = {
    caption: string,
    visible: boolean,
}

export type TPanelProps = {
    width: number,
    height: number,
    visible: boolean,
    externalClass?: string;
}
export type TComplexPanelProps = TPanelProps & {
    content: TInitialArray,
}

export type TObjectProps = {
    width?: number,
    height?: number,
    visible?: boolean,
    caption?: string,
    content?: TInitialArray,
}


export type TArrayObject = {
    type: string,
    props: TObjectProps,
}

export type TInitialArray = Array<TArrayObject>;