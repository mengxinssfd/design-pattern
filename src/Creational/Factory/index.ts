interface Product {
  operation(): string;
}

export class ConcreteProduct1 implements Product {
  operation(): string {
    return `{Result of the ConcreteProduct1}`;
  }
}
export class ConcreteProduct2 implements Product {
  operation(): string {
    return `{Result of the ConcreteProduct2}`;
  }
}
export class ConcreteProduct3 implements Product {
  operation(): string {
    return `{Result of the ConcreteProduct3}`;
  }
}

export abstract class Creator {
  abstract factoryMethod(): Product;
  someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creators code has just worked with ${product.operation()}`;
  }
}

export class ConcreteCreator1 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}
export class ConcreteCreator2 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}
export class ConcreteCreator3 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct3();
  }
}
