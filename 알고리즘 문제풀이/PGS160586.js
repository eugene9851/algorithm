function findAlphabet(map, alphabet) {
  let min = Infinity;

  map.forEach((keyPad) => {
    if (keyPad.split("").indexOf(alphabet) === -1) return;
    min = Math.min(min, keyPad.split("").indexOf(alphabet) + 1);
  });
  return min !== Infinity ? min : -1;
}

function solution(keymap, targets) {
  return targets.map((target) => {
    let count = 0;
    for (let i = 0; i < target.length; i++) {
      const result = findAlphabet(keymap, target[i]);
      //알파벳이 키맵에 없으면 즉시 -1 반환
      if (result === -1) return -1;
      count += result;
    }
    return count;
  });
}

keymap = ["AA"];
targets = ["B"];
console.log(solution(keymap, targets));
