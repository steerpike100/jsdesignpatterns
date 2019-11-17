var Task = function(name){
this.name = name;
this.completed = false;

this.complete = function(){
    console.log('completing task' + task.name);
    this.completed = true;
}
this.save = function(){
    console.log('saving Task: ' + this.name);
}
}

var task1  = new TextTrackList('create a demo for constructors')
var task2  = new TextTrackList('create a demo for modules')
var task3  = new TextTrackList('create a demo for singletons')
var task4 = new TextTrackList('create a demo for prototypes')

