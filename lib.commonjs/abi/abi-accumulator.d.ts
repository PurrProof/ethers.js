import { Coder } from "./coders/abstract-coder.js";
interface AbiWord {
    data: Uint8Array;
    isIndex?: boolean;
    coders: number[];
}
export type AbiWordOffsetMap = Map<number, AbiWord>;
interface AbiContext {
    offset: number;
    coderIds: number[];
}
export declare class AbiWordAccumulator {
    #private;
    private constructor();
    clear(): void;
    static getInstance(): AbiWordAccumulator;
    pushContext(coder: Coder): void;
    offset(offset: number): void;
    curContext(): AbiContext | null;
    popContext(): AbiContext;
    upsertWord(offset: number, data: Uint8Array, isIndex?: boolean): void;
    get coders(): Coder[];
    get words(): AbiWordOffsetMap;
}
export {};
//# sourceMappingURL=abi-accumulator.d.ts.map