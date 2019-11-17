var task = {
    title: 'My Title',
    description: 'My Description'
}

Object.defineProperty(task, 'toString', {
    value: function (){
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: true
});

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function (){
        return this.title + ' is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: true
});

console.log(urgentTask.toString())