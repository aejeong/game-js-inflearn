class Hero {
  constructor(el) {
    this.el = document.querySelector(el);
    this.moveX = 0;
    this.speed = 16;
  }

  keyMotion(){
    if(key.keyDown['left']){
      this.el.classList.add('run','flip');

      this.moveX = this.moveX - this.speed;
    }else if(key.keyDown['right']){
      this.el.classList.add('run');
      this.el.classList.remove('flip');

      this.moveX = this.moveX + this.speed;
    }

    if(key.keyDown['attack']) this.el.classList.add('attack');

    if(!key.keyDown['left'] && !key.keyDown['right']) this.el.classList.remove('run');

    if(!key.keyDown['attack']) this.el.classList.remove('attack');

    this.el.parentNode.style.transform = `translateX(${this.moveX}px)`;
  }
}