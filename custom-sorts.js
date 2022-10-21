function ageSort(users) {
  // Your code here
  return users.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    } else {
      return 1;
    }
  });
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
      return 1;
    }
    if (a % 2 !== 0 && b % 2 === 0) {
      return -1;
    }
    return a - b;
  });
}

function validAnagrams(s, t) {
  // Your code here
  return s.split('').sort().join('') === s.split('').sort().join('');
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    let aLength = String(a).length;
    let bLength = String(b).length;
    if (aLength > bLength) {
      return -1
    }
    if (aLength < bLength) {
      return 1;
    }
    return a - b;
  })
}

function frequencySort(arr) {
  // Your code here
  let hashtable = {}
  arr.forEach(el => {
    if (el in hashtable) {
      hashtable[el] += 1;
    } else {
      hashtable[el] = 1;
    }
  });

  return arr.sort((a, b) => {
    if (hashtable[a] > hashtable[b]) {
      return 1;
    } else if (hashtable[a] < hashtable[b]) {
      return -1;
    }
    return b - a;
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
