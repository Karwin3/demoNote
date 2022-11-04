;(() => {
  interface Lengthwise {
    length: number
  }

  // 指定泛型约束
  function fn2<T extends Lengthwise>(x: T): void {
    console.log(x.length)
  }
  // fn2(123) // error
  fn2('123')
})()
