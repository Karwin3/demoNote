;(() => {
  class Person {
    readonly name: string = 'abc'
    constructor(name: string) {
      this.name = name
    }
  }

  let john = new Person('John')
  console.log(john.name)
  // john.name = 'test'  // error

  // 仅在构造函数里使用 readonly name: string 参数来创建和初始化 name 成员
  class Person2 {
    constructor(readonly name: string) {}
  }

  const p = new Person2('jack')
  console.log(p.name)
})()
