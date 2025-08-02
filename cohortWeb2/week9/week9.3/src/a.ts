enum Direction {
  Up, // 1
  Down, //2
  Right, //3
  Left, //4
}

function doSomething(keyPressed: Direction) {
  if (keyPressed == Direction.Up) {
  }
}

doSomething(Direction.Up);
doSomething(Direction.Right);

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Right);
console.log(Direction.Left);
