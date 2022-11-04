// 剩余参数
;(() => {
  function info(x: string, ...args: string[]) {
    console.log(x, args)
  }
  info('abc', 'c', 'b', 'a')
})()
