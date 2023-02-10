export interface Trait {
    name: string,
    values: TraitValue[]
}

export interface TraitValue {
    name: string,
    count: number,
}