// 使用接口表示函数类型
;(() => {
  interface ISearchFunc {
    (source: string, subString: string): boolean
  }
  const searchFunc: ISearchFunc = function (
    source: string,
    subString: string
  ): boolean {
    return source.search(subString) > -1
  }
  console.log(searchFunc('jk', 'j'))
})()
