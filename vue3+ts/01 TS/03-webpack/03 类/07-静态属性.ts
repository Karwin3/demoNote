// static
;(() => {
  class Person {
    name1: string
    static name2: string = 'B'
    constructor(name1: string) {
      this.name1 = name1
    }
  }

  console.log(Person.name2)
  console.log(new Person('jk').name1)
})()
