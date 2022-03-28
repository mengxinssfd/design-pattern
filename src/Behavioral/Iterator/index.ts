export interface MyIterator<T> {
  current(): T;
  next(): T;
  key(): number;
  rewind(); // 倒带
  valid(): boolean;
}

// 聚合器
export interface Aggregator {
  getIterator(): MyIterator<string>;
}

// 单词集合
export class WordsCollection implements Aggregator {
  private items: string[] = [];
  getItems(): string[] {
    return this.items;
  }
  getCount(): number {
    return this.items.length;
  }
  addItem(item: string) {
    this.items.push(item);
  }
  getIterator(): MyIterator<string> {
    return new AlphabeticalOrderIterator(this);
  }
  getReverserIterator(): MyIterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}

// 字母顺序迭代器
export class AlphabeticalOrderIterator implements MyIterator<string> {
  private position = 0;
  constructor(private collection: WordsCollection, private reverse = false) {
    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }
  current(): string {
    return this.collection.getItems()[this.position];
  }
  key(): number {
    return this.position;
  }
  next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }
  rewind() {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }

  valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }
    return this.position < this.collection.getCount();
  }
}
