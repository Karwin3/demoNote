;
(() => {
    // 输出姓名
    function showNname(person) {
        return person.lastname + person.firstname;
    }
    // 定义一个对象
    const person = {
        firstname: 'jiang',
        lastname: 'k',
    };
    console.log(showNname(person));
})();
