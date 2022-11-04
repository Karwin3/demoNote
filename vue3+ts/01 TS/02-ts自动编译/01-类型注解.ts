// 类型注解是一种轻量级的为函数和变量添加的约束
;(() => {
  function showMsg(str: string) {
    return 'hello' + str
  }
  let msg = 'jk'
  console.log(showMsg(msg))
})()
