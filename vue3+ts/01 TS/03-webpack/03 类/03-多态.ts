// 多态
// const str: 父类 = new 子类
;(() => {
  // 父类
  class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    sayHi(): string {
      return `hello,I'm ${this.name}`
    }
  }
  // 子类
  class Student extends Person {
    score: number
    constructor(name: string, age: number, score: number) {
      super(name, age)
      this.score = score
    }
    // 重写sayHi方法
    sayHi(): string {
      // 调用父类中的sayHi方法
      console.log(super.sayHi())
      return `hello,I'm ${this.name},I get ${this.score}`
    }
  }
  const student: Person = new Student('jk', 1, 100)
  // 调用的方法为子类中重写的方法
  console.log(student.sayHi())
})()
