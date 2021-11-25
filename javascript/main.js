// start show and hide the navbar links and setting box 
document.querySelector('.navbar .fa-bars').onclick = ()=>{
    
    document.querySelector('.navbar .links').classList.toggle('show')
}

document.querySelector('.setting-box .icone-box').onclick = ()=>{
    
    document.querySelector('.setting-box').classList.toggle('show');

    document.querySelector('.setting-box .icone-box .fa-cog').classList.toggle('fa-spin');
}


// end show and hide the navbar links and setting box

// start change colors of your website
let colors = document.querySelectorAll('.setting-box .bloc div ul li');

let colorLocal = localStorage.getItem('color-option');

if(colorLocal !== null){

    document.documentElement.style.setProperty('--mainColor' ,colorLocal);

    colors.forEach(element =>{
        element.classList.remove('active');

        if(element.dataset.color === colorLocal){
            element.classList.add('active');
        }
    })
}
colors.forEach(color =>{

    color.addEventListener('click' , (e)=>{

        document.documentElement.style.setProperty('--mainColor' , e.target.dataset.color);

        localStorage.setItem('color-option' , e.target.dataset.color);

        e.target.parentElement.querySelectorAll('.active').forEach(element =>{

            element.classList.remove('active')
        })
        e.target.classList.add('active');
    })
})
// end change colors of your website

//start: change font-family of our website

let fonts = document.querySelectorAll('.setting-box .bloc .font input');

fonts.forEach(input =>{
    input.addEventListener('click' , (e)=>{
        document.documentElement.style.setProperty('--font-family' , e.target.value)
    })
})

//end: change font-family of our website

// start change images of landing-page
let landingButtons = document.querySelectorAll('.setting-box .bloc .landing span'),
    landingPage = document.querySelector('.landing-page'),
    imagesName = [1,2,3,4,5,6,7,0],
    stopInterval ,
    statutOfRandomize = true;

let landingLocal = localStorage.getItem('landing-option');

if(landingLocal !== null){

    landingButtons.forEach(element =>{

        element.classList.remove('active');

        if(element.dataset.landing === landingLocal){

            element.classList.add('active');

            if(landingLocal === 'yes'){
                statutOfRandomize = true;
            }else{
                statutOfRandomize = false;
            }

        }
    })
    
}


function randomize(){
    
    if( statutOfRandomize === true){

        stopInterval =  setInterval(()=>{
        
            let randomNumber = Math.floor(Math.random() * imagesName.length);
        
            landingPage.style.backgroundImage = 'url(image/'+randomNumber+'.jpg)';
            
        },3000);
    }
}


landingButtons.forEach(btn =>{
    btn.addEventListener('click' , (e)=>{
        
        e.target.parentElement.querySelectorAll('.active').forEach(element =>{
            
            element.classList.remove('active');
        })
        e.target.classList.add('active');
        
        if(e.target.dataset.landing === 'yes'){
            
            localStorage.setItem('landing-option' , 'yes');
            
            statutOfRandomize = true;
            randomize();

        }else{
            
            localStorage.setItem('landing-option' , 'no');
            statutOfRandomize = false;
            clearInterval(stopInterval);
        }
    })
})
randomize()
// end change images of landing-page



// start service section
let images = document.querySelectorAll('.Services .galery img');

images.forEach(img =>{

    img.addEventListener('click' , (e)=>{

        e.target.parentElement.querySelectorAll('.active').forEach(element =>{

            // element.classList.remove('active');
            

        })
        // e.target.classList.add('active')

        //create our galery animation 
        let galery = document.getElementById('Services');

        let galery_hover = document.createElement('div');

        galery_hover.className='galery-hover';

        galery.appendChild(galery_hover);

        let box = document.createElement('div');

        box.className='galery_box';

        galery_hover.appendChild(box);

        let title = document.createElement('h2');

        title.textContent = e.target.alt;

        box.appendChild(title);

        let pic = document.createElement('img');

        pic.src = e.target.src;

        box.appendChild(pic);

        let close = document.createElement('span');

        close.className= 'close';

        close.textContent='x';

        box.appendChild(close)

    })
    
})
// ------------close poup
document.addEventListener('click',(e)=>{

    if(e.target.className === 'close'){

        e.target.parentNode.remove();

        document.querySelector('.galery-hover').remove()
    }
})

// end service section


// strat: showing and hiding the bullets
let bulletsBox = document.querySelector('.bulletsBox');
let bulletsButtons = document.querySelectorAll('.setting-box .bloc .bull span');

let bulletsLocal = localStorage.getItem('bullets-option');
if(bulletsLocal !== null){
    bulletsButtons.forEach(element =>{
        element.classList.remove('active');
        
        if(bulletsLocal === element.dataset.bullets){
            element.classList.add('active');
        }
        if(bulletsLocal === 'show'){
            bulletsBox.style.display='block';
        }else{
            bulletsBox.style.display='none';
        }
    })
}


bulletsButtons.forEach(bullet =>{
    bullet.addEventListener('click' , (e)=>{

        e.target.parentElement.querySelectorAll('.active').forEach(el =>{

            el.classList.remove('active')
        })
        e.target.classList.add('active');

        if(e.target.dataset.bullets === 'show'){
            bulletsBox.style.display='block';
            localStorage.setItem('bullets-option' , 'show')
        }else{
            bulletsBox.style.display='none';
            localStorage.setItem('bullets-option' , 'hid')
        }
    })
})

// end: showing and hiding the bullets 


// start about section 

// -----------------------show about section box
let about = document.querySelectorAll('.about .container .content .box');
let skillsSection = document.querySelector('.skills');
let progressBars = document.querySelectorAll('.skills .container .content .box .progress span');
window.onscroll = ()=>{

    let windowHeight = window.innerHeight,
        windowscroll = window.pageYOffset;

    about.forEach(box =>{

        let boxHeight = box.offsetHeight,
            boxoffsetScroll = box.offsetTop;
            
        if(windowscroll >= (boxHeight + boxoffsetScroll - windowHeight)){
            
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })

    // --------------------skills section-----------------
    let skillsHeight = skillsSection.offsetHeight,
        skillsOffsetTop = skillsSection.offsetTop;

        

    if(windowscroll >= (skillsHeight + skillsOffsetTop - windowHeight)){

        progressBars.forEach(progress =>{
            
            progress.style.width = ''+progress.dataset.progress+'';
        })
        
    }else{
        progressBars.forEach(progress =>{
            
            progress.style.width = 0;
        })   
    }
    // --------------------------------arrow-up-----------------------
    if(windowscroll >= 1000){
        
        document.querySelector('.container .fa-arrow-up').style.display = 'block';
    }else{
        document.querySelector('.container .fa-arrow-up').style.display = 'none';
    }    
}

// end about section

// start a progect section
let progects = document.querySelectorAll('.progects .container .box .image');

progects.forEach(progect =>{

    progect.addEventListener('click' , (e)=>{

        window.open('https://www.google.com');
    })
})

let progectsSourceCode = document.querySelectorAll('.progects .container .box .link');

progectsSourceCode.forEach(link =>{

    link.addEventListener('click' , (e)=>{

        window.open(''+e.target.dataset.link+'');
    })
})

// end a progect section

// start testimonials section
let currentSlider = 1,
    allBlocs = document.querySelectorAll('.testimonials .container .content .show .bloc');

// -------------------------------creat the checker function ------------------------
function theChecker(){
    
    theRemoverActiveClass()
    allBlocs[currentSlider - 1].classList.add('active');
    pagination_Li[currentSlider - 1].classList.add('active');

}
// -------------------------------creat the checker function ------------------------

// --------------------------------- create the pagination ------------------------
let paginationBox = document.querySelector('.testimonials .container .content  .controls .pagination');

let paginationUl = document.createElement('ul');
    paginationUl.setAttribute('id' , 'pagination-Ul');
    
    for(let i = 1 ; i <= allBlocs.length ; i++){

    let paginationLi = document.createElement('li');
    paginationLi.setAttribute('data-index',i);
        paginationLi.textContent = i;
        
    paginationUl.appendChild(paginationLi);
}
paginationBox.appendChild(paginationUl);
let pagination_Li = document.querySelectorAll('#pagination-Ul li')
// --------------------------------- create the pagination ------------------------

// ---------------------------start a function to remove class ----------------
function theRemoverActiveClass(){

    pagination_Li.forEach(li =>{
        li.classList.remove('active')
    })
    allBlocs.forEach(li =>{
        li.classList.remove('active')
    })
}
// ---------------------------end a function to remove class ----------------

// ----------------------------the next and prev function---------------
let prevButton = document.querySelector('.testimonials .container .content .controls .prev'),
    nextButton = document.querySelector('.testimonials .container .content .controls .next');

prevButton.onclick = prevFunction;
nextButton.onclick = nextFunction;

function prevFunction(){
    if(currentSlider === 1){
        currentSlider = allBlocs.length + 1
    }else{
        
        currentSlider--;
        theChecker()
    }
}
function nextFunction(){
    if(currentSlider === allBlocs.length){
        currentSlider = 0
    }else{
        
        currentSlider++;
        theChecker()
    }
}
// ----------------------------the next and prev function---------------

// ------------------------------target the pagination --------------
pagination_Li.forEach(li =>{

    li.addEventListener('click' , (e)=>{

        currentSlider = e.target.dataset.index;
        theChecker()
    })
})
// ------------------------------target the pagination --------------


theChecker()
// end testimonials section

// start scroll to correct section when we target the link 
let navbarLinks = document.querySelectorAll('.navbar .container .links ul li a');

navbarLinks.forEach(link =>{

    link.addEventListener('click', (e) =>{

        document.querySelector('#'+e.target.dataset.scroll+'').scrollIntoView({
            behavior:'smooth',
        },600);
        
    })
})

document.querySelector('.container .fa-arrow-up').onclick = ()=>{

    document.querySelector('#Home').scrollIntoView({
        behavior:'smooth',
    },600)
}

// ------------------------------------bullets button------------------------
let bullets = document.querySelectorAll('.bulletsBox div');

bullets.forEach(bullet =>{

    bullet.addEventListener('click' , (e)=>{

        document.querySelector(e.target.dataset.scroll).scrollIntoView({
            behavior:"smooth",
        },600);
        
    })
})
// end scroll to correct section when we target the link 


// start validation the form
let submitButton = document.querySelector('.contact .container form div input[type="submit"]');

submitButton.onclick = (e)=>{

    // let rightName = document.querySelector('.contact .container form div input[name="name"]');

    // let rightNumber = document.querySelector('.contact .container form div input[name="number"]');

    // if(rightName.value.length <= 15){
        
    //     if(rightNumber.value != String){

    //     }
    // }else{
        // }
        
            e.preventDefault();
}
// end validation the form
