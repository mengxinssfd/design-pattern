export class Target {
  request(): string {
    return "Target: The default target's behavior.";
  }
}

export class Adaptee {
  specialRequest(): string {
    return '.eetpadA eht fo roivaheb laicepS';
  }
}

export class Adapter extends Target {
  constructor(private adaptee: Adaptee) {
    super();
  }
  request(): string {
    const result = this.adaptee.specialRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
}
