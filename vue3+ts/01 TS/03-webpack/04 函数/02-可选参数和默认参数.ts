// 可选参数和默认参数
;(() => {
  function buildName(firstName: string = 'A', lastName?: string): string {
    if (lastName) {
      return firstName + '-' + lastName
    } else {
      return firstName
    }
  }

  console.log(buildName('C', 'D'))
  console.log(buildName('C'))
  console.log(buildName())
})()
