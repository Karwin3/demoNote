// 泛型
// 需求: 根据指定的数量 count 和数据 value , 创建一个包含 count 个 value 的数组
;(() => {
  function createArray2<T>(value: T, count: number) {
    const arr: Array<T> = []
    for (let index = 0; index < count; index++) {
      arr.push(value)
    }
    return arr
  }

  const arr3 = createArray2<number>(11, 3)

  console.log(arr3[0].toFixed())
  // console.log(arr3[0].split('')) // error

  const arr4 = createArray2<string>('aa', 3)
  
  console.log(arr4[0].split(''))
  // console.log(arr4[0].toFixed()) // error
})()
