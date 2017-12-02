import {
  compose,
  map,
  split,
  toString,
  addIndex,
  filter,
  sum,
  flip,
  curry,
  equals,
  concat,
  reverse,
  splitAt,
  zip,
  head,
  apply,
} from 'ramda'

const fpParseInt = compose(curry, flip)(parseInt)
const toNumber = fpParseInt(10)

const toNumberList = compose(map(toNumber), split(''))

const filterIndexed = addIndex(filter)

const shift = (places) => compose(apply(concat), reverse, splitAt(places * -1))

export const part1 = (input) => {
  const list = toNumberList(input)
  const shifted = shift(1)(list)
  const pairs = zip(list, shifted)
  const matching = filter(apply(equals))(pairs)
  const numbers = map(head)(matching)
  return sum(numbers)
}

export const part2 = (input) => {
  const list = toNumberList(input)
  const shifted = shift(list.length / 2)(list)
  const pairs = zip(list, shifted)
  const matching = filter(apply(equals))(pairs)
  const numbers = map(head)(matching)
  return sum(numbers)
}
