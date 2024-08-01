
let element =document.querySelector('.moto')
let element2=document.querySelector('.about')

// function handlingScroll ()
// {
//     let rect = element.getBoundingClientRect();
//     let rect2=element2.getBoundingClientRect();/**very important , returns an object that has the properties of the element including top bottom etc and width height-- the amount of scrolling to get to the top of the element for example is displayes by the object.top , in this example its rect.top */
//     let windowHeight=window.innerHeight;
    
//     //starts with a big positive number and gets less the more i scroll (distance from the view port to the element so when i scroll it gets less)
//    /**triggers when element is 75% in view */
//     //This condition checks if the top of the .moto element is within the lower 75% of the viewport height. If true, it indicates that the element is 75% or more visible.
//     //if *.75 isnt added , then the visible effect will be applied as soon as the user scrolls to its location (the elements reaches the viewport or 75% of it (the lower 75%)) , 0.75 acts as a delay for the transition
//     //also the condition is <= not >= 
//     //windowheight is a static number unless i resize the window'
//     //final note , consider windowheight is 700 , the <= condition means that rect.top is large and the more i scroll the less it gets , so when its  value is 700 or less (multiplied by.75 meanining less than 700) the visible effect occurs
//     if(rect.top<=windowHeight*0.75)
//     {
//         element.classList.add('visible')
//        /**very important for later */
//         //also just type class name without the dot (.)

//     }
//     // window.addEventListener('scroll',handlingScroll) error here its in the function itself
    
//     if (rect2.top<=windowHeight*0.75){
//         element2.classList.add('visible')
//     }
    
// }

// window.addEventListener('scroll',handlingScroll)



function handlingScroll(){
    let windowheight=window.innerHeight
    if (element)//if element exists
    {
        let rect=element.getBoundingClientRect()
        if(rect.top<=windowheight*0.75)
        {
            element.classList.add('visible')
        }
    }
    if (element2)//if element exists
    {
        let rect2=element.getBoundingClientRect()
        if(rect2.top<=windowheight*0.75)
        {
            element2.classList.add('visible')
        }
    }
}

window.addEventListener('scroll',handlingScroll)

let icon=document.querySelector('.icon1')
function iconScroll(){
    if(scrollY>100){
        icon.classList.add('visible')
    }
    else{
        icon.classList.remove('visible')
    }
}
function backToTop(){
    event.preventDefault();//very important //to disable the # effect which would change the animation
    window.scrollTo({
        top : 0,
        behavior:"smooth"
    })
}
window.addEventListener('scroll',iconScroll)
icon.addEventListener('click',backToTop)
