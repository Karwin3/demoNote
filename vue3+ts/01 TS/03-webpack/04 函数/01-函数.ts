// 函数
;(() => {
  // 1. 基本实例
  // 命名函数
  function add(x: number, y: number): number {
    return x + y
  }

  // 匿名函数
  let myAdd = function (x: number, y: number): number {
    return x + y
  }

  // 2. 完整类型
  let myAdd2: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y
  }
})()
