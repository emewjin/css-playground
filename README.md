## vanilla-extract

- zero runtime을 지향

### 이슈

- 각 스타일 클래스에서 자식 선택자 사용 불가

  - selector 사용시 `&`를 강제
  - `${parentClass} &`는 허용되지만 `& ${childClass}`는 불가

  에러 메세지를 읽어보면 (특히 3번째 문단), 각각의 요소에 각각의 단일 class를 달아두는 걸 지향하는 것 같음. 그래서 만약 다른 클래스를 타겟팅 한다면, 그쪽 블록으로 스타일 코드를 이동하라 함. 이렇게 하는 이유는 유지보수를 편하게 하기 위해서.

  ```
  [plugin:vanilla-extract] Invalid selector: & ul

  Style selectors must target the '&' character (along with any modifiers), e.g. `${parent} &` or `${parent} &:hover`.

  This is to ensure that each style block only affects the styling of a single class.

  If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of `& ${child}`) to 'parent', you should add `${parent} &` to 'child').

  If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write `& h1`, you should instead write 'globalStyle(`${parent} h1`, { ... })'
  ```

  관련해서 [스택오버플로우의 글](https://stackoverflow.com/a/70554390/15382341)도 읽어보면 좋음.

  의도는 이해가 가는데 너무 귀찮다... 진짜 완전 strict하게 해당 룰을 지향하는 팀에서 쓰면 좋긴 할듯
