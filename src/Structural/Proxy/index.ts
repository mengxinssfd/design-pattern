interface Subject {
  request();
}
export class RealSubject implements Subject {
  request() {
    console.log('RealSubject: Handling request.');
  }
}
export class Proxy implements Subject {
  constructor(private realSubject: RealSubject) {}
  private checkAccess(): boolean {
    // / Some real checks should go here.
    console.log('Proxy: Checking access prior to firing a real request.');
    return true;
  }
  private logAccess() {
    console.log('Proxy: Logging the time of request.');
  }
  request() {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }
}
