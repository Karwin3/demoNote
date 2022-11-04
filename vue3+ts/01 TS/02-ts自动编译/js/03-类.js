;
(() => {
    // 定义一个类
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.fullname = firstname + lastname;
        }
    }
    // 输出姓名
    function showNname(person) {
        return person.lastname + person.firstname;
    }
    // 实例化对象
    const person = new Person('jiang', 'classk');
    console.log(showNname(person));
})();
