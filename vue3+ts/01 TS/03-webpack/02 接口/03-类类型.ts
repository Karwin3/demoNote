// 类类型
// 1. 一个类可以实现多个接口
// 2. 一个接口可以继承多个接口
;(() => {
  interface Alarm {
    alert(): any
  }

  interface Light {
    lightOn(): void
    lightOff(): void
  }

  class Car implements Alarm {
    alert() {
      console.log('Car alert')
    }
  }

  // 1. 一个类可以实现多个接口
  class Car2 implements Alarm, Light {
    alert() {
      console.log('Car alert')
    }
    lightOn() {
      console.log('Car light on')
    }
    lightOff() {
      console.log('Car light off')
    }
  }

  // 2. 一个接口可以继承多个接口
  interface LightableAlarm extends Alarm, Light {}

  class Car3 implements LightableAlarm {
    alert() {
      console.log('Car alert')
    }
    lightOn() {
      console.log('Car light on')
    }
    lightOff() {
      console.log('Car light off')
    }
  }
})()
