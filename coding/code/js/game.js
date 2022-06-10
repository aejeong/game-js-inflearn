// 필요한 key 값 정리
const key = {
  keyDown : {},
  keyValue : {
    37: 'left',
    38: 'up',
    39: 'right'
  }
}

// window event 관련 함수 작성란
const windowEvent = () => {
 window.addEventListener('keydown', e => {
  key.keyDown[key.keyValue[e.which]] = true;
 });
 window.addEventListener('keyup', e => {
  key.keyDown[key.keyValue[e.which]] = false;
})
}

const init = () => {
  windowEvent(); // 윈도우 이벤트
}

// 모든 리소스 로드 후 init 실행
window.onload = () => {
  init();
}