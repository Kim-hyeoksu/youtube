// const tagBoxEl = document.querySelector('.tag .tag-box')
// tagBoxEl.addEventListener('click', (e)=>{
//   tagBoxEl.array.forEach(tagEl => {
//     tagEl.classList.remove('focus')
//   });
//   e.target.classList.toggle('focus')
// })
const searchEl = document.querySelector('header input')
const inputInnerEl = document.querySelector('header .searchBox .input-inner')
const betweenBarEl = document.querySelector('header .searchBox .between-bar')
searchEl.addEventListener('focus', ()=>{
  console.log(inputInnerEl)
  searchEl.classList.add('click')
  inputInnerEl.style.opacity = '1'
  betweenBarEl.style.borderRightColor = '#fff'
  betweenBarEl.style.borderTopColor = '#1c62b9'
  betweenBarEl.style.borderBottomColor = '#1c62b9'
})
searchEl.addEventListener('blur', ()=>{
  console.log(inputInnerEl)
  searchEl.classList.remove('click')
  inputInnerEl.style.opacity = '0'
  betweenBarEl.style.borderRightColor = 'rgba(224,224,224)'
  betweenBarEl.style.borderTopColor = 'rgba(224,224,224)'
  betweenBarEl.style.borderBottomColor = 'rgba(224,224,224)'
})
searchEl.classList.remove('click')

const tagBoxEl = document.querySelectorAll('.tag .swiper .swiper-wrapper .swiper-slide')
tagBoxEl.forEach((tagEl)=>{
  tagEl.addEventListener('click',(e)=>{
    tagBoxEl.forEach((tagEl)=>{
      if(tagEl.classList.contains('focus')) {
        console.log(tagEl)
        tagEl.classList.remove('focus')
      }
    })
    e.target.classList.add('focus')
  })
})

//video-list section
const videoBoxs = document.querySelectorAll('.video-list .video-box')
videoBoxs.forEach((videoBox)=>{
  const nextVideo = videoBox.querySelector('.next-video')

  nextVideo.addEventListener('mouseenter', (e)=>{
    videoBox.style.zIndex = 1
    const hoverPlay = e.target.querySelector('.hover-play')
    hoverPlay.style.display = 'flex'
    
    const timer = setTimeout(()=> {
      hoverPlay.style.display = 'none'
      videoBox.style.scale = 1.15
      gsap.to(videoBox, {
        delay: 0,
        duration: 0.2,
        scale: 1.15
      })
    }, 1000);

    nextVideo.addEventListener('mouseleave', (e)=>{
      videoBox.style.zIndex = 0
      gsap.set(videoBox, {
        scale: 1
      })
      clearTimeout(timer)
      const hoverPlay = e.target.querySelector('.hover-play')
      hoverPlay.style.display = 'none'
      
    })
  })
  // videoBox.addEventListener('transitionend', (e)=>{
  //   console.log('transitionend')
  //   const hoverPlay = e.target.querySelector('.hover-play')
  //   hoverPlay.style.display = 'none';
  // })
})

//Swiper
new Swiper('.tag .swiper', {
  autoplay: false, //자동 재생 여부
  loop: true,  //반복 재생 여부
  slidesPerView: all, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: false, //1번 슬라이드가 가운데 보이기
  navigation: {
    prevEl: '.tag .swiper-button-prev', //이전 버튼 요소
    nextEl: '.tag .swiper-button-next'  //다음 버튼 요소
  }
})