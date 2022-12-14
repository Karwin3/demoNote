// 泛型接口
;(() => {
  interface IbaseCRUD<T> {
    data: T[]
    add: (t: T) => void
    getById: (id: number) => T | undefined
  }

  class User {
    id?: number //id主键自增
    name: string //姓名
    age: number //年龄

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  }

  class UserCRUD implements IbaseCRUD<User> {
    data: User[] = []

    add(user: User) {
      user = { ...user, id: Date.now() }
      this.data.push(user)
      console.log('保存user', user.id)
    }

    getById(id: number) {
      return this.data.find((item) => item.id === id)
    }
  }

  const userCRUD = new UserCRUD()
  userCRUD.add(new User('tom', 12))
  userCRUD.add(new User('tom2', 13))
  console.log(userCRUD.data)
})()
