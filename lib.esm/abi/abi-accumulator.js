class AbiWordAccumulator {
    static #instance = null;
    #words = new Map();
    #coders = [];
    #contexts = [];
    // private constructor to prevent direct instantiation
    constructor() {
        this;
    }
    clear() {
        this.#words = new Map();
        this.#coders = [];
        this.#contexts = [];
    }
    static getInstance() {
        if (AbiWordAccumulator.#instance === null) {
            AbiWordAccumulator.#instance = new AbiWordAccumulator();
        }
        return AbiWordAccumulator.#instance;
    }
    pushContext(coder) {
        const coderId = this.#coders.push(coder) - 1;
        const curContext = this.curContext();
        if (curContext === null) {
            this.#contexts.push({ offset: 0, coderIds: [coderId] });
        }
        else {
            const newCoderIds = [...curContext.coderIds, coderId];
            this.#contexts.push({ offset: curContext.offset, coderIds: newCoderIds });
        }
    }
    offset(offset) {
        const curContext = this.curContext();
        if (curContext === null) {
            throw Error("Can't offset without context");
        }
        curContext.offset += offset;
    }
    curContext() {
        return this.#contexts.length
            ? this.#contexts[this.#contexts.length - 1]
            : null;
    }
    popContext() {
        const context = this.#contexts.pop();
        if (context === undefined) {
            throw Error("Can't pop context");
        }
        return context;
    }
    upsertWord(offset, data, isIndex) {
        const curContext = this.curContext();
        const newOffset = curContext ? curContext.offset + offset : offset;
        const coderIds = curContext ? curContext.coderIds : [];
        const word = {
            data,
            isIndex: isIndex ?? this.#words.get(newOffset)?.isIndex,
            coders: coderIds, // current context coders
        };
        this.#words.set(newOffset, word);
    }
    get coders() {
        return this.#coders;
    }
    get words() {
        // convert the words map to an array, sort by keys (offsets), and then convert back to a map
        return new Map(Array.from(this.#words.entries()).sort((a, b) => a[0] - b[0]));
    }
}
export { AbiWordAccumulator };
//# sourceMappingURL=abi-accumulator.js.map