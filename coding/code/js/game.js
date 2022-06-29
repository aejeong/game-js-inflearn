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

const allMonsterComProp = {
  arr: []
}

const bulletComProp = {
  launch: false,
  arr: []
}

const gameBackground = {
  gameBox: document.querySelector('.game')
}

const gameProp = {
  screenWidth : window.innerWidth,
  screenHeight : window.innerHeight,
}

const renderGame = () => {
  hero.keyMotion();
  setGameBackGround();

  bulletComProp.arr.forEach((arr,i) =>{
    arr.moveBullet();
  });
  allMonsterComProp.arr.forEach((arr, i) =>{
    arr.moveMonster();
  })
  // hero keyMotion에 대한 애니메이션 frame 
  window.requestAnimationFrame(renderGame);
}

const setGameBackGround = () => {
  let parallaxValue = Math.min(0, (hero.moveX - gameProp.screenWidth / 3) * -1)
  // 히어로가 움직이는 방향의 반대 방향으로 움직이게 하기위해 -1 곱함

  gameBackground.gameBox.style.transform = `translateX(${parallaxValue}px)`;

}

// window event 관련 함수 작성란
const windowEvent = () => {
 window.addEventListener('keydown', e => {
  key.keyDown[key.keyValue[e.which]] = true;
 });
 window.addEventListener('keyup', e => {
  key.keyDown[key.keyValue[e.which]] = false;
})
 window.addEventListener('resize', e=> {
  gameProp.screenWidth = window.innerWidth;
  gameProp.screenHeight = window.innerHeight;
 })
}

const loadImg = () => {
  const imgPath = '../../lib/images'
  // 사용되어질 이미지 선 로드 작업
  // 캐릭터의 모션이 키 가 눌렸을때 css의 백그라운드 이미지가 늦게 불리는 경우를 대비
  const preLoadImgSrc = [imgPath + '/ninja_attack.png', imgPath + '/ninja_run.png'];
  preLoadImgSrc.forEach(arr=>{
    const img = new Image();
    img.src = arr;
  })
}

let hero;
const init = () => {
  hero = new Hero('.hero'); // hero 인스턴스 생성 할당
  allMonsterComProp.arr[0] = new Monster(500, 9000);
  loadImg();
  windowEvent(); // 윈도우 이벤트
  renderGame();
}

// 모든 리소스 로드 후 init 실행
window.onload = () => {
  init();
}

