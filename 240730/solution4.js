let starbucks = [
  {
    name: "카페 라떼",
    icedOnly: false,
  },
  {
    name: "콜드 브루",
    icedOnly: true,
  },
  {
    name: "돌체 라떼",
    icedOnly: false,
  },
  {
    name: "돌체 콜드 브루",
    icedOnly: true,
  },
];

// 여기에 코드를 작성하세요.
// 아이스 전용 커피 배열을 만듭니다.
const icedOnly = starbucks.filter(function (menu) {
  return menu.icedOnly === true; // 리턴에 조건을 넣어준다.
});

console.log(icedOnly);
