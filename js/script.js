const productContainers = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', ()=> {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', ()=> {
        item.scrollLeft -= containerWidth;
    })
})  
