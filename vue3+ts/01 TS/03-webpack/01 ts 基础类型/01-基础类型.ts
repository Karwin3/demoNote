// 基础类型
;(() => {
  // 1. 布尔类型
  let flag: boolean = true

  // 2. 数字
  let a1: number = 10 // 十进制
  let a2: number = 0b1010 // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制

  // 3. 字符串
  let name: string = 'tom'
  name = 'jack'
  // name = 12 // error
  let age: number = 12
  const info = `My name is ${name}, I am ${age} years old!`

  // undefined null
  // undefined 和 null 可以赋值给任何类型的数据,tsconfig.json的严格模式要关闭("strict": false) (没有成功)
  let u: undefined = undefined
  let n: null = null
  // let test: number = null
  // console.log(test)

  // 4. 数组
  let list1: number[] = [1, 2, 3]
  let list2: Array<number> = [1, 2, 3]

  // 5. 元组
  // 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同,长度固定，类型匹配
  let t1: [string, number]
  t1 = ['hello', 10] // OK
  // t1 = [10, 'hello'] // Error

  // 6. 枚举
  enum Color {
    Red,
    Green,
    Blue,
  }

  // 枚举数值默认从0开始依次递增
  // 可以手动更改指定元素的值
  //  由枚举的值得到它的名字

  let myColor: Color = Color.Green // 0
  let colorName: string = Color[2] // Blue

  // 7. any 可以赋值任何数据类型

  let notSure: any = 4
  notSure = 'maybe a string'
  notSure = false

  let list: any[] = [1, true, 'free']
  list[1] = 100

  // 缺点 类似情况无报错信息
  // list[0].split('')

  // 8. void
  // 函数声明时写在函数后面，表示没有返回数据
  function voidfun(): void {
    console.log(1)
  }

  // 9. object
  // object 表示非原始类型，也就是除 number，string，boolean之外的类型。
  function fn2(obj: object): object {
    console.log('fn2()', obj)
    return {}
    // return undefined
    // return null
  }
  // console.log(fn2(new String('abc')))
  // console.log(fn2('abc') // error
  // console.log(fn2(String))

  // 10. 联合类型
  // 联合类型（Union Types）表示取值可以为多种类型中的一种

  // 需求1: 定义一个函数得到一个数字或字符串值的字符串形式值
  // 函数中的方法需要把数据类型都要照顾到，否则会报错
  function toString2(x: number | string): string {
    return x.toString()
  }
  console.log(toString2(123))

  // 11. 类型断言
  /* 
    类型断言(Type Assertion): 可以用来手动指定一个值的类型
    语法:
        方式一: <类型>值
        方式二: 值 as 类型  tsx中只能用这种方式
    */

  /* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
  function getLength(x: number | string) {
    if ((<string>x).length) {
      return (x as string).length
    } else {
      return x.toString().length
    }
  }
  // console.log(getLength('abcd'), getLength(1234))

  // 12. 类型推断
  // 类型推断: TS会在没有明确的指定类型的时候推测出一个类型
  /* 定义变量时赋值了, 推断为对应的类型 */
  let b9 = 123 // number
  // b9 = 'abc' // error

  /* 定义变量时没有赋值, 推断为any类型 */
  let b10 // any类型
  b10 = 123
  b10 = 'abc'
})()
