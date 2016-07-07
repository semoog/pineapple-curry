// given the following array, randomize it.

var students = [
  'Dan'
, 'Brack'
, 'Erin'
, 'Geordyn'
, 'Jess'
, 'Sarah'
, 'Andrew'
, 'Ryan'
, 'Tim'
, 'Stephen'
, 'David'
, 'Mark'
]

function shuffle(array) {
  let i = 0, j = 0, temp = null

  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i] // last element stored for later
    array[i] = array[j] // last element --> random element
    array[j] = temp // random element --> last element
  }
  return array
}

console.log(shuffle(students))
