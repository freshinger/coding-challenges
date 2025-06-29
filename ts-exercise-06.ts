interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
type Shape = Square | Rectangle;

function getArea(shape: Shape): number {
  if (shape.kind === "square") {
    return shape.size * shape.size;
  } else {
    return (shape as Rectangle).width * (shape as Rectangle).height;
  }
}

//test square
console.log(getArea({ kind: "square", size: 5 }));
//test Rectangle
console.log(getArea({ kind: "rectangle", width: 2, height: 4 }));
