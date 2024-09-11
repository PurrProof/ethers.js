import { Coder } from "./coders/abstract-coder.js";

export class AbiCodersTreeNode {
  public parent: AbiCodersTreeNode | null;
  public children: AbiCodersTreeNode[] = [];
  public coderId: number;

  constructor(parent: AbiCodersTreeNode | null, coderId: number) {
    this.parent = parent;
    this.coderId = coderId;
    if (this.parent) {
      this.parent.children.push(this);
    }
  }
}

export interface AbiWord {
  data: Uint8Array;
  role?: string;
  parentOffset: number;
  coders: number[];
}

export type AbiWordOffsetMap = Map<number, AbiWord>;
interface AbiContext {
  offset: number;
  parentOffset: number;
  coderNode: AbiCodersTreeNode; // current context's coder node
  coderIds: number[]; // sequence of coders from root context to this one
}

export class AbiWordAccumulator {
  static #instance: AbiWordAccumulator | null = null;
  #words: AbiWordOffsetMap = new Map<number, AbiWord>();
  #coders: Coder[] = [];
  #contexts: AbiContext[] = [];
  #codersTree: AbiCodersTreeNode = new AbiCodersTreeNode(null, -1);

  // private constructor to prevent direct instantiation
  private constructor() {
    this;
  }

  clear(): void {
    this.#words = new Map<
      number,
      { data: Uint8Array; role: string; parentOffset: number; coders: [] }
    >();
    this.#coders = [];
    this.#contexts = [];
    this.#codersTree = new AbiCodersTreeNode(null, -1);
  }

  static getInstance(): AbiWordAccumulator {
    if (AbiWordAccumulator.#instance === null) {
      AbiWordAccumulator.#instance = new AbiWordAccumulator();
    }
    return AbiWordAccumulator.#instance;
  }

  pushContext(coder: Coder): void {
    const coderId = this.#coders.push(coder) - 1;
    const curContext = this.curContext();
    if (curContext === null) {
      const node = new AbiCodersTreeNode(this.#codersTree, coderId);
      this.#contexts.push({
        offset: 0,
        parentOffset: 0,
        coderNode: node,
        coderIds: [coderId],
      });
    } else {
      const node = new AbiCodersTreeNode(curContext.coderNode, coderId);
      const newCoderIds = [...curContext.coderIds, coderId];
      this.#contexts.push({
        offset: curContext.offset,
        parentOffset: curContext.offset,
        coderNode: node,
        coderIds: newCoderIds,
      });
    }
  }

  offset(offset: number): void {
    const curContext = this.curContext();
    if (curContext === null) {
      throw Error("Can't offset without context");
    }
    curContext.offset += offset;
  }

  curContext(): AbiContext | null {
    return this.#contexts.length
      ? this.#contexts[this.#contexts.length - 1]
      : null;
  }

  popContext(): AbiContext {
    const context = this.#contexts.pop();
    if (context === undefined) {
      throw Error("Can't pop context");
    }
    return context;
  }

  upsertWord(offset: number, data: Uint8Array, role?: string): void {
    const curContext = this.curContext();
    const newOffset = curContext ? curContext.offset + offset : offset;
    const coderIds = curContext ? curContext.coderIds : [];

    const word: AbiWord = {
      data,
      role: role ?? this.#words.get(newOffset)?.role,
      parentOffset: curContext?.parentOffset ?? 0,
      coders: coderIds, // current context coders
    };

    this.#words.set(newOffset, word);
  }

  get coders(): Coder[] {
    return this.#coders;
  }

  get codersTree(): AbiCodersTreeNode {
    return this.#codersTree;
  }

  get words(): AbiWordOffsetMap {
    // convert the words map to an array, sort by keys (offsets), and then convert back to a map
    return new Map(
      Array.from(this.#words.entries()).sort((a, b) => a[0] - b[0])
    );
  }
}
