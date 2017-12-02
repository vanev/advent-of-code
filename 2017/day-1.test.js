import { test } from 'ava'
import { part1, part2 } from './day-1'

test('part 1', (t) => {
  t.is(part1('1122'), 3)
  t.is(part1('1111'), 4)
  t.is(part1('1234'), 0)
  t.is(part1('91212129'), 9)
})

test('part 2', (t) => {
  t.is(part2('1212'), 6)
  t.is(part2('1221'), 0)
  t.is(part2('123425'), 4)
  t.is(part2('123123'), 12)
  t.is(part2('12131415'), 4)
})
