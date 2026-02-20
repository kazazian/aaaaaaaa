document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  function randomHexColor () {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }
  let btn = document.querySelector("[data-js='t1-btn']")
  btn.addEventListener('click',()=>{
    btn.style.background= randomHexColor()
    document.querySelector("[data-js='t1-hex']").textContent =randomHexColor()
  })
  //2
  const input = document.querySelector("[data-js='t2-input']")
  input.addEventListener('input',()=>{
    let len=input.value.length;
    document.querySelector("[data-js='t2-count']").textContent=len;
  })
  //3
  let btn2=document.querySelector("[ data-js='t3-add']")
  btn2.addEventListener('click', ()=>{
    let txt=document.querySelector("[data-js='t3-input']").value
    let li = document.createElement("li")
    let ul = document.querySelector("[data-js='t3-list']")
    if (txt.length>0){
      li.textContent = txt
      ul.append(li)
    }
  //4
  })
  let btn4=document.querySelector("[data-js='t4-minus']")
  let btn44=document.querySelector("[data-js='t4-plus']")
  let btn444=document.querySelector("[data-js='t4-reset']")
  let count=document.querySelector("[data-js='t4-out']").textContent
  btn4.addEventListener('click',()=>{
    count--;
    document.querySelector("[data-js='t4-out']").textContent = count
  })
  btn44.addEventListener('click',()=>{
    count++;
    document.querySelector("[data-js='t4-out']").textContent = count
  })
  btn444.addEventListener('click',()=>{
    document.querySelector("[data-js='t4-out']").textContent = 0
    count=0
  })
  //5
  let btn5=document.querySelector("[data-js='t5-open']")
  btn5.addEventListener('click',()=>{
    let hide = document.querySelector("[data-js='t5-modal']")
    hide.hidden=false;
    let btn55=document.querySelector("[data-js='t5-close']")
    btn55.addEventListener('click',()=>{
      hide.hidden=true
    })
  })
  //6
  let btn6=document.querySelector("[data-tab='a']")
  let btn66=document.querySelector("[data-tab='b']")
  let btn666=document.querySelector("[data-tab='c']")

  let t6=document.querySelector("[data-pane='a']")
  let t66=document.querySelector("[data-pane='b']")
  let t666=document.querySelector("[data-pane='c']")

  btn6.addEventListener('click',()=>{
    btn6.classList.add("is-active")
    t6.classList.add("is-active")
    btn66.classList.remove("is-active")
    btn666.classList.remove("is-active")
    t66.classList.remove("is-active")
    t666.classList.remove("is-active")
  })
  btn66.addEventListener('click',()=>{
    btn6.classList.remove("is-active")
    btn66.classList.add("is-active")
    btn666.classList.remove("is-active")
    t6.classList.remove("is-active")
    t66.classList.add("is-active")
    t666.classList.remove("is-active")
  })
  btn666.addEventListener('click',()=>{
    btn6.classList.remove("is-active")
    btn66.classList.remove("is-active")
    btn666.classList.add("is-active")
    t6.classList.remove("is-active")
    t66.classList.remove("is-active")
    t666.classList.add("is-active")
  })
  //7
  let btn7=document.querySelector("[data-js='t7-run']")
  btn7.addEventListener('click',()=>{
    let text=document.querySelector("[data-js='t7-input']").value
    let reversed=text.split('').reverse().join('');
    let out=document.querySelector("[data-js='t7-out']")
    out.textContent=reversed

  })
  //8
  let inpA = document.querySelector('[data-js="t8-a"]')
  let inpB = document.querySelector('[data-js="t8-b"]')
  let btnAdd = document.querySelector('[data-js="t8-add"]')
  let btnMultip = document.querySelector('[data-js="t8-mul"]')
  let output = document.querySelector('[data-js="t8-out"]')
  btnAdd.addEventListener('click', () => {
    let a = parseFloat(inpA.value)
    let b = parseFloat(inpB.value)
    let result = a + b
    if (isNaN(result)) {
      output.textContent = 'NaN'
    } else {
      output.textContent = result
    }
  })
  btnMultip.addEventListener('click', () => {
    let a = parseFloat(inpA.value)
    let b = parseFloat(inpB.value)
    let result = a * b
  
    if (isNaN(result)) {
      output.textContent = 'NaN'
    } else {
      output.textContent = result
    }
  })


  //9
  let btn9=document.querySelector("[data-js='t9-toggle']")
  btn9.addEventListener('click',()=>{
    let t9=document.querySelector("[data-js='t9-text']")
    if(t9.hidden){
      t9.hidden = false;
      btn9.textContent = 'Скрыть';
    }
    else {
    t9.hidden = true;
    btn9.textContent = 'Показать';
    }
  })
  //10
  let btn10=document.querySelector('[data-js="t10-range"]')
  btn10.addEventListener('input',()=>{
    const size=btn10.value
    document.querySelector('[data-js="t10-box"]').style.width = size + 'px';
    document.querySelector('[data-js="t10-box"]').style.height = size + 'px';
    document.querySelector('[data-js="t10-out"]').textContent = size + 'px';

  })
  //11
  let inter=0
  let remainingTime = 0;
  document.querySelector('[data-js="t11-start"]').addEventListener('click',()=>{
    clearInterval(inter)
    let remainingTime=parseInt(document.querySelector('[data-js="t11-seconds"]').value)
    let outp = document.querySelector('[data-js="t11-out"]');
    let updateTimer = () => {
          outp.textContent = remainingTime;
          if (remainingTime <= 0) {
              clearInterval(inter);
              return;
          }
          remainingTime--;
      };
      updateTimer();
      inter = setInterval(updateTimer, 1000); 
  })
  document.querySelector('[data-js="t11-stop"]').addEventListener('click',()=>{
    clearInterval(inter);
  })
   
  //12
  let progres=document.querySelector('[data-js="t12-bar"]')
  let label=document.querySelector('[data-js="t12-label"]')
  let plus=document.querySelector('[data-js="t12-plus"]')
  let currentWidth=0
  plus.addEventListener('click',()=>{
    currentWidth += 42;  
    if (currentWidth > 420) currentWidth = 420;  
    progres.style.width = currentWidth + 'px'; 
    label.textContent = currentWidth + 'px'; 
  })
  //13
  let inp=document.querySelector('[data-js="t13-input"]')
  let ou=document.querySelector('[data-js="t13-out"]')
  document.addEventListener('keydown',function(event){
    if(event.ctrlKey && event.key === 'k'){
      event.preventDefault();
      inp.value = ''; 
      inp.focus();  
      ou.textContent = 'Пишите';
    }
    if (event.key === 'Escape') {
    document.activeElement.blur(); 
    ou.textContent=inp.value
    }
  })
  //14
  let btn14=document.querySelector('[data-js="t14-next"]')
  btn14.addEventListener('click',()=>{
    const quotes=['Я Матвей лучший','Я Матвей великолепный','Я Матвей превосходный','Я Матвей Макнаггетс','Я Матвей аутист']
    const randomIndex = Math.floor(Math.random() * quotes.length)
    let outt=document.querySelector('[data-js="t14-out"]')
    outt.textContent=quotes[randomIndex]
  })
  //15
  let move=document.querySelector('[data-js="t15-item"]')
  let outXY=document.querySelector('[data-js="t15-coords"]')
  let area=document.querySelector('[data-js="t15-area"]')
  let isDragging = false
  let shiftX, shiftY 
  move.addEventListener('mousedown',function(e){
    shiftX = e.clientX - move.getBoundingClientRect().left
    shiftY = e.clientY - move.getBoundingClientRect().top
    area.append(move)
    isDragging = true
    e.preventDefault()
  })
   document.addEventListener('mousemove',function(e){
    if (!isDragging) return
    const areaRect = area.getBoundingClientRect();
    const itemRect = move.getBoundingClientRect();
    const itemWidth = itemRect.width;
    const itemHeight = itemRect.height;

    let newLeft = e.clientX - area.getBoundingClientRect().left - shiftX;
    let newTop = e.clientY - area.getBoundingClientRect().top - shiftY;

    newLeft = Math.max(0, Math.min(newLeft, areaRect.width - itemWidth));
    newTop = Math.max(0, Math.min(newTop, areaRect.height - itemHeight));
    
    move.style.left = newLeft + 'px';
    move.style.top = newTop + 'px';
    
    outXY.textContent = `x: ${Math.round(newLeft)}, y: ${Math.round(areaRect.height - itemHeight - newTop)}`;
  })
  document.addEventListener('mouseup', function(e) {
  isDragging = false
  })


  //16
  let btn16 = document.querySelector('[data-js="t16-animate"]')
  let animatedBox = document.querySelector('[data-js="t16-box"]')

  btn16.addEventListener('click', () => {
    let start = null
    let duration = 1000 
    let height = 900 

    function animate(timestamp) {
      if (!start) start = timestamp
      let progress = timestamp - start
      let x = height * (progress / duration) 

      animatedBox.style.transform = `translateX(${x}px)`

      if (progress < duration) {
        requestAnimationFrame(animate)
      } else {
        animatedBox.style.transform = 'translateX(0)'
      }
    }

    requestAnimationFrame(animate)
  })
  
  //17
  let area16=document.querySelector('[data-js="t17-area"]')
  function Appear(){
    let div16=document.createElement('div')
    div16.style.position = 'absolute';
    div16.style.width = '100px';
    div16.style.height = '100px';
    div16.style.backgroundColor = '#111';
    div16.style.left = Math.random() * 660 + 'px'; 
    div16.style.top = Math.random() * 220 + 'px';
    area16.append(div16)
  }
  setInterval(Appear,1000)
 
  //18
  let area18=document.querySelector('[data-js="t18-area"]')
  let area18Size=area18.getBoundingClientRect()
  let area18Width=area18Size.width
  setInterval(createDiv,1000)
  function createDiv(){
    let div18=document.createElement('div')
    div18.className='box'
    div18.style.position = 'absolute';
    area18.append(div18)
    div18.style.left=area18Width+'px'
    requestAnimationFrame(()=>animDiv1(div18))
  }
  function animDiv1(div18){
    let currentLeft=parseInt(div18.style.left)
    let newLeft=currentLeft-1
    div18.style.left=newLeft+'px'
    if(newLeft+div18.offsetWidth<=0){
      div18.remove()
      return
    }
    requestAnimationFrame(()=>animDiv1(div18))
  }
  //19
  let area19=document.querySelector('[data-js="t19-area"]')
  let area19Size=area19.getBoundingClientRect()
  let area19Width=area19Size.width
  setInterval(createDiv2,1000)

  function createDiv2(){
    let div19=document.createElement('div')
    div19.className='box'
    div19.style.position = 'absolute';
    area19.append(div19)
    div19.style.top = Math.random() * 220 + 'px';
    div19.style.left=area19Width+'px'
    requestAnimationFrame(()=>animDiv2(div19))
  }

  function animDiv2(div19){
    let currentLeft=parseInt(div19.style.left)
    let newLeft=currentLeft-1
    div19.style.left=newLeft+'px'
    if(newLeft+div19.offsetWidth<=0){
      div19.remove()
      return
    }
    requestAnimationFrame(()=>animDiv2(div19))
  }
  //20
  let scoreEl=document.querySelector('[data-js="t20-score"]')
  let score=0
  let area20=document.querySelector('[data-js="t20-area"]')
  function createDiv3(){
    let div20=document.createElement('div')
    div20.className='box'
    div20.style.position = 'absolute';
    div20.style.left = Math.random() * 660 + 'px'; 
    div20.style.top = Math.random() * 220 + 'px';
    area20.append(div20)
    div20.addEventListener('click',()=>{
      div20.remove()
      score+=1
      scoreEl.textContent=score
    
  })
  }
  setInterval(createDiv3, 1000);
  //21
  let area21=document.querySelector('[data-js="t21-area"]')
  let area21Size=area21.getBoundingClientRect()
  let area21Width=area21Size.width
  let score2=0
  let scoreEl2=document.querySelector('[data-js="t21-score"]')
  let GameOver=document.querySelector('[data-js="t21-game-over"]')
  
  let livesEl=document.querySelector('[data-js="t21-lives"]')
  let lives=3
  let restart=document.querySelector('[data-js="t21-restart"]')
  let gameInterval=setInterval(createDiv4,1000)

  function createDiv4(){
    let gameIsover=false
    let div21=document.createElement('div')
    div21.className='box'
    div21.style.position = 'absolute';
    area21.append(div21)
    div21.style.top = Math.random() * 220 + 'px';
    div21.style.left=area21Width+'px'
    requestAnimationFrame(()=>animDiv3(div21))
    div21.addEventListener('click',()=>{
      if (!gameIsover){
        div21.remove()
        score2+=1
        scoreEl2.textContent=score2
      }
  })
    function animDiv3(div21){
    if(gameIsover)return
    let currentLeft=parseInt(div21.style.left)
    let newLeft=currentLeft-1
    div21.style.left=newLeft+'px'
    if(newLeft+div21.offsetWidth<=0){
      div21.remove()
      if (lives>0){
        lives--
      }
      livesEl.textContent=lives
      if (lives==0){
        GameOver.hidden=false
        gameIsover=true
        clearInterval(gameInterval)
      }
      return
    }
    requestAnimationFrame(()=>animDiv3(div21))
  }
  }
  restart.addEventListener('click',()=>{
    clearInterval(gameInterval)
    GameOver.hidden=true
    gameIsover=false
    lives = 3
    livesEl.textContent = lives
    score2=0
    document.querySelectorAll('.box').forEach(el => el.remove())
    scoreEl2.textContent=score2
    gameInterval = setInterval(createDiv4, 1000)
  })



  enableTooltips();
});