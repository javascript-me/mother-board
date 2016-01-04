import {sum, square, variable, Student} from './import';

console.log(sum(2, 3))

console.log(square(5));

console.log(variable);

var info = {
    name: "Anthony Chen",
    id: 11115078
}

var student = new Student(info);

console.log(student.getName());

