type TypeCheck<T> = T extends string ? string : number;
type A = TypeCheck<"hello">; // string
type B = TypeCheck<42>; // number
