// The detectCollision function searches through an array of rectangles and
// returns the first rectangle that the given point is inside of.

// Use destructuring and a higher-order function to make this code cleaner.
// Hint: you might want to use a new array method called find, so look that up!

// function detectCollision(objects, point) {
//   for (let i = 0; i < objects.length; i++) {
//     let object = objects[i]
//     if (point.x >= object.x && point.x <= object.x + object.width &&
//         point.y >= object.y && point.y <= object.y + object.height)
//       return object
//   }
// }


//complete
const myObjects = [
  {x:  10, y: 20, width: 30, height: 30},
  {x: -40, y: 20, width: 30, height: 30},
  {x:   0, y:  0, width: 10, height:  5}
]

const [a,b,c] = myObjects;

//this works:
// [a,b,c].find(x => 4 >= x.x && 4 <= x.x + x.width &&  2 >= x.y && 2 <= x.y + x.height);

function detectCollision(point){
  return [a,b,c].find(x => point.x >= x.x && point.x <= x.x + x.width &&
      point.y >= x.y && point.y <= x.y + x.height);
}

console.log(detectCollision({x: 4, y: 2}))

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Improve_this_code
