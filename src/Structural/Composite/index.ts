// 组合模式

export abstract class Component {
  protected parent: Component | null = null;
  public setParent(parent: Component | null) {
    this.parent = parent;
  }
  public getParent(): Component | null {
    return this.parent;
  }
  public isComposite(): boolean {
    return false;
  }
  abstract operation(): string;
}

// 叶子节点
export class Leaf extends Component {
  operation() {
    return 'Leaf';
  }
}

// 容器节点
export class Composite extends Component {
  protected children: Component[] = [];
  public add(child: Component) {
    child.setParent(this);
    this.children.push(child);
  }
  public remove(child: Component) {
    const index = this.children.findIndex((i) => i === child);
    if (index > -1) {
      this.children.splice(index, 1)[0].setParent(null);
      return true;
    }
    return false;
  }
  operation(): string {
    const result = this.children.map((i) => i.operation());
    return `Branch(${result.join(' + ')})`;
  }
}
