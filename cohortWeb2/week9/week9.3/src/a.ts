// by default values 
// enum Direction {
//   Up, // 1
//   Down, //2
//   Right, //3
//   Left, //4
// }

// function doSomething(keyPressed: Direction) {
//   if (keyPressed == Direction.Up) {
//   }
// }

// doSomething(Direction.Up);
// doSomething(Direction.Right);

// console.log(Direction.Up);
// console.log(Direction.Down);
// console.log(Direction.Right);
// console.log(Direction.Left);



// if you set types  to enums  then you have to set types to all enums

enum Direction {
    Up = "up",
    Down = "down",
    Right = "right",
    Left = "left"
}

console.log(Direction.Up)
console.log(Direction.Down)
console.log(Direction.Left)
console.log(Direction.Right)