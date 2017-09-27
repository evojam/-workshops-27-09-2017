export type SquareType = {
  color: string,
  id: string,
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export function randId() {
  return Math.random().toString(36).substr(2, 10);
}

export function generateData(n: number): SquareType[] {
  const array = Array(n).fill(0)
  return array.map(element => {
    return {color: getRandomColor(), id: randId()}
  })
}
