export interface Builder {
  // 生产A部分
  producePartA();
  // 生产B部分
  producePartB();
  // 生产C部分
  producePartC();
}

export class Product1 {
  parts: string[] = [];
  listParts() {
    console.log(`Product parts ${this.parts.join(', ')}`);
  }
}

export class ConcreteBuild1 implements Builder {
  private product!: Product1;
  constructor() {
    this.rest();
  }
  rest() {
    this.product = new Product1();
  }

  producePartA() {
    this.product.parts.push('PartA1');
  }

  producePartB() {
    this.product.parts.push('PartB1');
  }

  producePartC() {
    this.product.parts.push('PartC1');
  }

  // 出货
  getProduct(): Product1 {
    const res = this.product;
    this.rest();
    return res;
  }
}

export class Director {
  private builder?: Builder;
  setBuilder(builder: Builder) {
    this.builder = builder;
  }
  // 构建部分
  buildMinimalViableProduct() {
    this.builder?.producePartA();
  }
  // 构建全部
  buildFullFeaturedProduct() {
    this.builder?.producePartA();
    this.builder?.producePartB();
    this.builder?.producePartC();
  }
}
