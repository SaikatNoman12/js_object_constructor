/* 
javaScript constrictor function. 
*/

const Person = function (first, last, age) {
    this.firstName = first,
        this.lastName = last,
        this.age = age,
        fullName = function () {
            return `${this.firstName} ${this.lastName}`;
        }
}

// first object;
const noman = new Person('Abdullah', 'Nomaan', 35);
console.log(noman);
/*== return:-
{ 
firstName: 'Abdullah',
lastName: 'Nomaan', 
age: 35 
}
==*/

// second object;
const hasnat = new Person('Abu', 'Hasnat', 45);
console.log(hasnat);
/*== return:-
{ 
firstName: 'Abdullah',
lastName: 'Nomaan', 
age: 35 
}
==*/
