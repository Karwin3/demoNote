;(() => {
  // 定义一个接口
  interface IPerson {
    firstname: string
    lastname: string
  }
  // 输出姓名
  function showNname(person: IPerson) {
    return person.lastname + person.firstname
  }
  // 定义一个对象
  const person = {
    firstname: 'jiang',
    lastname: 'k',
  }
  console.log(showNname(person))
})()
