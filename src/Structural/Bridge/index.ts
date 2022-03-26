interface Implementation {
  operationImplementation(): string;
}
export class Abstraction {
  constructor(protected implementation: Implementation) {}
  operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: Base operation with:\n${result}`;
  }
}

export class ExtendedAbstraction extends Abstraction {
  operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}

export class ConcreteImplementationA implements Implementation {
  operationImplementation(): string {
    return "ConcreteImplementationA: Here's the result on the platform A.";
  }
}
export class ConcreteImplementationB implements Implementation {
  operationImplementation(): string {
    return "ConcreteImplementationB: Here's the result on the platform A.";
  }
}
