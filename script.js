const msg=`Dear Laiba,

There are thousands of beautiful places in the world, yet some of my favourite memories are simply the ones where you were beside me. Thank you for filling ordinary days with laughter, comfort, and happiness. Every conversation, every walk, every smile, and every little moment we shared has quietly become a part of who I am.

Loving you has never been about grand gestures; it's been about appreciating the little things that make you special. Your kindness, your smile, your heart, and the way you make everything feel a little brighter are reasons I'll always be thankful for meeting you.

This little website can't hold everything I feel, but I hope it reminds you of one thing: you are deeply loved, appreciated, and cherished.

Happy Girlfriend's Day, my favourite person. ❤️

Forever,
Asutosh 💜`;

heart.onclick=()=>{
main.style.display='block';
scrollTo({top:innerHeight,behavior:'smooth'});
let i=0;
let t=setInterval(()=>{letter.textContent+=msg[i++]||'';if(i>msg.length)clearInterval(t)},18);
};

document.querySelectorAll('.gallery img').forEach(img=>{

});


document.addEventListener('mousemove',e=>{
cursor.style.left=e.clientX+'px';
cursor.style.top=e.clientY+'px';
});

musicBtn.onclick=()=>{
 const a=document.getElementById('bgm');
 if(a.paused){a.volume=0.4;a.play();musicBtn.textContent='⏸ Pause Music';}
 else{a.pause();musicBtn.textContent='🎵 Play Music';}
};

const start=new Date('2024-10-25T23:00:00');
function tick(){let d=Date.now()-start;let days=Math.floor(d/86400000);d%=86400000;let h=Math.floor(d/3600000);d%=3600000;let m=Math.floor(d/60000);d%=60000;let s=Math.floor(d/1000);timer.innerHTML=`${days} Days<br>${h} Hours ${m} Minutes ${s} Seconds`;}
setInterval(tick,1000);tick();

// floating hearts
setInterval(()=>{
 let h=document.createElement('div');
 h.className='heartfloat';
 h.textContent='💜';
 h.style.left=Math.random()*100+'vw';
 h.style.bottom='-30px';
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),8000);
},1800);

// simple fireworks
const btn=document.getElementById('fireworksBtn');
if(btn){
btn.onclick=()=>{
 const c=document.getElementById('fw');
 const x=c.getContext('2d');
 c.width=window.innerWidth;
 c.height=window.innerHeight;
 c.style.position='fixed';
 c.style.left='0';
 c.style.top='0';
 c.style.width='100vw';
 c.style.height='100vh';
 c.style.pointerEvents='none';
 let cx=Math.random()*c.width;
 let cy=80+Math.random()*(c.height*0.6);
 let parts=[];
 for(let i=0;i<180;i++)parts.push({x:cx,y:cy,a:Math.random()*6.28,s:2+Math.random()*5});
 let t=0;
 let id=setInterval(()=>{
  x.clearRect(0,0,c.width,c.height);
  parts.forEach(p=>{
    x.fillStyle='hsl('+((t*5)%360)+',100%,70%)';
    x.beginPath();
    x.arc(p.x+Math.cos(p.a)*p.s*t,p.y+Math.sin(p.a)*p.s*t,2,0,7);
    x.fill();
  });
  if(++t>45){clearInterval(id);x.clearRect(0,0,c.width,c.height);}
 },30);
};
}

setInterval(()=>{
 const p=document.createElement('div');
 p.className='sakura';
 p.textContent='🌸';
 p.style.left=Math.random()*100+'vw';
 p.style.fontSize=(12+Math.random()*18)+'px';
 p.style.animationDuration=(6+Math.random()*6)+'s';
 document.body.appendChild(p);
 setTimeout(()=>p.remove(),12000);
},350);


function petal(){
 const p=document.createElement('div');
 p.className='petal';
 p.textContent='🌸';
 p.style.left=Math.random()*100+'vw';
 p.style.animationDuration=(6+Math.random()*6)+'s';
 p.style.setProperty('--dx',(-100+Math.random()*200)+'px');
 document.body.appendChild(p);
 setTimeout(()=>p.remove(),13000);
}
setInterval(petal,350);

setInterval(()=>{
 const s=document.createElement('div');
 s.style.cssText='position:fixed;left:'+Math.random()*90+'vw;top:'+Math.random()*40+'vh;width:2px;height:2px;background:white;box-shadow:0 0 10px white;transform:rotate(-35deg);animation:shoot 1s linear forwards;z-index:1';
 const st=document.createElement('style');
 st.textContent='@keyframes shoot{to{transform:translate(250px,150px) rotate(-35deg);opacity:0}}';
 document.head.appendChild(st);
 document.body.appendChild(s);
 setTimeout(()=>{s.remove();st.remove();},1000);
},25000);


// v1.3 lightbox
const lb=document.getElementById('lightbox');
const lbImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery img').forEach(img=>{
 img.addEventListener('click',()=>{lb.style.display='flex';lbImg.src=img.src;});
});
lb.onclick=()=>lb.style.display='none';
if(window.letter){letter.classList.add('typeCursor');}

// heart bloom
heart.addEventListener('click',()=>{heart.animate([{transform:'scale(1)'},{transform:'scale(1.4)'},{transform:'scale(1)'}],{duration:700});});

// v1.5 ambient hearts
setInterval(()=>{
 const h=document.createElement('div');
 h.className='heartfloat';
 h.textContent=Math.random()>.5?'💜':'✨';
 h.style.left=Math.random()*100+'vw';
 h.style.bottom='-30px';
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),8000);
},2500);

console.log('Project Aurora - Final Edition');
