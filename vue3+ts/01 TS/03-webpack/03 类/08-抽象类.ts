// 抽象类做为其它派生类的基类使用。 它们不能被实例化。
;(() => {
  abstract class Animal {
    abstract cry(): any

    run() {
      console.log('run()')
    }
  }

  class Dog extends Animal {
    cry() {
      console.log('Dog cry()')
    }
  }

  const dog = new Dog()
  dog.cry()
  dog.run()
})()
