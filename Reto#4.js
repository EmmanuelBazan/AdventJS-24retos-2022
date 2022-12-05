const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 },
  ]

function fitsInOneBox(boxes = []) {
  const canContain = (box1 = { l: 3, w: 1, h: 1 }, box2 = { l: 3, w: 1, h: 1 }) => {
    if(box1.l > box2.l && box1.w > box2.w && box1.h > box2.h){
        return true
    } else {
        return false
    }
  };

  const newArr = boxes.map((item) => {
    return {...item, a: item.l * item.w * item.h}
  });

  newArr.sort((a, b) => b.a - a.a);

  return newArr.map((item,index) => {
    if(index + 1 < newArr.length){
        if(canContain(item,newArr[index+1])){
            return true
        } else {
            return false
        }
    } else {
        return []
    }
  }).flat().every((item) => item === true)

}

console.log(fitsInOneBox(boxes))

// function fitsInOneBox(boxes = []) {
//   return boxes
//     .map((box) => {
//       if (canContain(box, boxes)) {
//         return true;
//       } else {
//         if (canFit(box, boxes)) {
//           return true;
//         } else {
//           return false;
//         }
//       }
//     })
//     .every((item) => item === true);
// }

// const canContain = (box = { l: 3, w: 1, h: 1 }, boxes = []) => {
//   return boxes
//     .map((item = { l: 3, w: 1, h: 1 }) => {
//       if (box.l > item.l && box.w > item.w && box.h > item.h) {
//         return true;
//       } else {
//         return false;
//       }
//     })
//     .some((item) => item === true);
// };

// const canFit = (box = { l: 3, w: 1, h: 1 }, boxes = []) => {
//   return boxes
//     .map((item = { l: 3, w: 1, h: 1 }) => {
//       if (box.l < item.l && box.w < item.w && box.h < item.h) {
//         return true;
//       } else {
//         return false;
//       }
//     })
//     .some((item) => item === true);
// };

// console.log(fitsInOneBox(boxes));
// console.log(canContain(boxes[0],boxes));
// console.log(canFit(boxes[0],boxes));
