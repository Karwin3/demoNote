;(() => {
  // 定义一个类
  class Person {
    firstname: string
    lastname: string
    fullname: string
    constructor(firstname: string, lastname: string) {
      this.firstname = firstname
      this.lastname = lastname
      this.fullname = firstname + lastname
    }
  }
  // 定义一个接口
  interface IPerson {
    firstname: string
    lastname: string
  }
  // 输出姓名
  function showNname(person: IPerson) {
    return person.lastname + person.firstname
  }

  // 实例化对象
  const person = new Person('jiang', 'classk')

  console.log(showNname(person))
})()
