/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        constructor(name){
            this.name = name;
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat extends Animal{
        constructor(name){
            super(name);
           
    }
        static get greeting() {return 'miaou miaou';}
    }
    class Dog extends Animal{
        constructor(name){
            super(name);
           
    }
        static get greeting() {return 'woof woof';}
    }
        
    document.getElementById("run").addEventListener("click",function(){
        let chat = new Cat('gribi');
        let chien = new Dog('groubu');
        console.log(chat.sayHello());
        console.log(chien.sayHello());
    });
})();
