class User {}
class Customer {}
class Admin {}

class SimpleFactory {
  public static create(type) {
    switch (type) {
      case 'user':
        return new User();
      case 'customer':
        return new Customer();
      case 'admin':
        return new Admin();
      default:
        throw new Error('传递的用户类型错误。');
    }
  }
}
