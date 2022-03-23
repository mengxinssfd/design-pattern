export class Flyweight {
  constructor(private shareState: any) {}
  operation(uniqueState: any) {
    const s = JSON.stringify(this.shareState);
    const u = JSON.stringify(uniqueState);
    console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
  }
}

export class FlyweightFactory {
  private flyweights: Record<string, Flyweight> = {};
  constructor(initialFlyweights: string[][]) {
    initialFlyweights.forEach((state) => {
      this.flyweights[this.getKey(state)] = new Flyweight(state);
    });
  }
  private getKey(state: string[]): string {
    return state.join('_');
  }
  // 只暴露出get
  getFlyweight(sharedState: string[]): Flyweight {
    const key = this.getKey(sharedState);
    // 如果已经有相同的则用之前的否则保存到缓存内部
    if (!(key in this.flyweights)) {
      console.log("creating new one");
      this.flyweights[key] = new Flyweight(sharedState);
    } else {
      console.log('reusing existing flyweight');
    }

    return this.flyweights[key];
  }
  listFlyweights() {
    const count = Object.keys(this.flyweights).length;
    console.log(`\nFlyweightFactory: I have ${count} flyweights:`);
    for (const key in this.flyweights) {
      console.log(key);
    }
  }
}