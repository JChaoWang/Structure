// interface 接口
(function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
        return Person;
    }());
    function showFullName(person) {
        return person.firstName + "-" + person.lastName;
    }
    var person = {
        firstName: '东方',
        lastName: '不敢'
    };
    var classPerson = new Person('诸葛', '孔明');
    console.log(showFullName(person));
    console.log(showFullName(classPerson), 'class');
})();
