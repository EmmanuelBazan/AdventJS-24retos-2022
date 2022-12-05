const packOfGifts = ["book", "doll", "ball", "book", "doll", "ball", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts = [], reindeers = []) {
  const wthPack = getWeigth(packOfGifts);
  const wthRein = getWeigth(reindeers)*2;
  const res = wthRein / wthPack;
  return Math.floor(res);
}

const getWeigth = (arr = []) => {
    return arr.reduce((acc,item) => {
        return acc + item.length
    },0)
}

console.log(distributeGifts(packOfGifts, reindeers));
