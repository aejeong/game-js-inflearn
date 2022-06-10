// 필요한 key 값 정리
const key = {
  keyDown : {},
  keyValue : {
    37: 'left',
    38: 'up',
    39: 'right',
    88: 'attack'
  }
}

// window event 관련 함수 작성란
const windowEvent = () => {
 window.addEventListener('keydown', e => {
  key.keyDown[key.keyValue[e.which]] = true;
  hero.keyMotion();
 });
 window.addEventListener('keyup', e => {
  key.keyDown[key.keyValue[e.which]] = false;
  hero.keyMotion();
})
}

let hero;
const init = () => {
  hero = new Hero('.hero'); // hero 인스턴스 생성 할당
  windowEvent(); // 윈도우 이벤트
}

// 모든 리소스 로드 후 init 실행
window.onload = () => {
  init();
}