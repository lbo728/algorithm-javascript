function solution(arr) {
  let answer = arr;

  // 1. arr 배열의 합이 100 미만인 경우만 반환하는 배열을 생성
  // 조건, 총합이 100을 넘지 않는 7개 수

  let sum;
  for (let i = 0; i < arr.length; i++) {
    if (sum < 100) {
      sum = sum + arr[i];
    }
  }
  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
