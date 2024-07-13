# 24.06.04

munikund 사이트 분석 및 피그마에 **디자인** 작업

**문제점 및 해결**

```

**생각보다 적은 강아지들의 활동적인 사진**
-> 저희집 강아지 진주 사진을 활용하여 활동적인 사진을 추가

```

# 24.06.05

디자인 작업 마무리 및 상단 nav 및 상단 HTML, CSS, jQuery 작업 완료

## 문제점 및 해결

**글씨가 세션 끝까지 남아있는 현상이 발생함**
-> end값을 짧게 주어 세션 끝이 아닌 세션 끝에 중앙쪽에서 사라지도록 구현

**스크롤 글씨 이벤트가 짧게 끝나서 아쉬움**
-> 세션의 height값을 길게 주어 스크롤 이벤트가 길게 되도록 함.


# 24.06.06

이미지 확대 영역 HTML, CSS, jQuery 완료

## 문제점 및 해결

**이미지 확대 세션에서 영역에 들어가면 스크롤시 점점 이미지 확대가 되어야 하는데 동작이 안됨**
-> 위에 글씨 이벤트 부분이 영역을 넘치는 현상이 발생하여 위에 글씨 이벤트 세션에 end 부분을 고정값을 주어 해결함

# 24.06.07

모바일 영역 HTML, CSS 완료, 모바일 이미지 jQuery구현중

## 문제점 및 해결

**sticky값을 어디에 주어야 계속 반복이 될지 고민이 됨**
-> .mobile-app-imagewrapper에 sticky를 주고 height 값을 100vh줌.

**스크롤시 모바일 화면 사진이 변경되나 옆에 내용과 별개로 바뀜**
->  scrollTrigger의  end값을 옆에 내용과 맞게 설정함

# 24.06.09

모바일 영역 글자 이벤트 HTML, CSS 수정 및 모바일 영역 jQuery 구현 완료

## 문제점 및 해결

**스크롤시 글자색이 변하는 이벤트시 너무 빠르게 진행되어 이벤트의 재미가 없음**
-> 감싸는 section의 값을 크게 주어 이벤트가 잘보이도록 해결함

**글자색이 변하는 이벤트 코드 작성시  만 주어 자바스크립트에서 on을 하면 색상이 바뀌는 코드로 하려고 했으나 실패함**
-> 감싸는 div를 쓰고 그 안에 span으로 처리를 하여 div영역이 width:0이였다가 스크롤시 width:100%으로 처리하여 해결함


# 24.06.10

가로 스크롤 영역, 갤러리 영역 및 움직이는 강아지 영역 HTML, CSS, jQuery 구현 완료

## 문제점 및 해결

**가로 스크롤시 글씨가 겹쳐 보여야 하는데 겹쳐 보이지 않음**
-> scrollTrigger의 pin을 사용하여 글씨가 겹쳐 보이도록 함


**강아지가 움직이는 모션이 들어간 세션에서 가로 스크롤이 생기는 문제가 발생함**
->이미지 자체에 overflow:hidden을 주어도 해결이 안되어 body에 값을 주니 해결됨

**움직이는 강아지 GIF 파일 저장시 흰색 테두리가 나오며 흰색 테두리가 없으면 사진이 깨짐 또한 움직이는 이벤트가 잘보임**
-> 배경색을 백그라운드 컬러와 동일한 색상으로 하여 GIF 파일을 저장하였으며 발바닥쪽이 아닌 몸쪽에 애니메이션 효과를 줌


# 24.06.11

하단 영역 HTML, CSS, jQuery 구현 완료

# 24.06.12

전체 영역 확인 및 마무리

## 문제점 및 해결

**움직이는 강아지 영역에서 강아지가 글씨 밑에 있으니 눈에 띄지 않음**
-> 강아지를 글씨 위에 해서 강아지를 잘보이도록 함

**강아지 갤러리 영역이 심심한 느낌임**
-> svg를 활용한 그려지는 아이콘 애니메이션을 줌

**ScrollTrigger가 창의 크기 조절시 내용들이 안보이는 현상이 발생**
-> 스크립트를 통해 resize시 다시 로딩이 되도록 구현함
