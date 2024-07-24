// 함수 사용하기

const lion = {
  name: "심바",
  age: 3,
  hero: true,
  Comment: "하쿠나마타타",
};

function incrementAge(사자) {
  사자.age = 사자.age + 1;
  return 사자;
}

console.log(incrementAge(lion));
