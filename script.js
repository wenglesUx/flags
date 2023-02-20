const init= document.querySelector('#initial-value')
const final = document.querySelector('#final-value')
const count = document.querySelector('#number-count')
const btnStart = document.querySelector('#start')
const btnStop = document.querySelector('#stop')
const display = document.querySelector('.content span')
const back = document.querySelector('.contentb span')

btnStop.addEventListener('click',stopaction)
btnStart.addEventListener('click',Start)
btnStop.style.marginRight ='1000px'





const treevalue = count.value
init.value = init.value

display.innerText = '00'
back.style.backgroundColor = 'red'
function Start(){
    
    const counte =  setInterval(numbr,count.value)

    function numbr(){
      init.value++
      display.innerText = init.value;
        if(init.value == final.value){
            back.style.backgroundColor = 'green'
            back.style.animation =''
          
            clearInterval(counte)
            
           
           
        }
        btnStop.addEventListener('click',()=>{
            clearInterval(counte)
        })
    }
     
     btnStart.style.marginRight = '1000px'
     btnStart.style.background = 'green'
     btnStart.classList.add('active')

     if(btnStart.classList.contains('active')){
         let btnAct = setInterval(action,600);

            btnStop.addEventListener('click',()=>{
                clearInterval(btnAct)

            })
        
        }
     



}



function action(){
    btnStop.style.marginRight =''
    btnStart.style.display ='none'
    btnStop.style.display ='block'
    btnStop.style.marginLeft =''
    back.style.animation ='border 0.4s infinite'
}
function stopaction(){
    btnStop.style.marginLeft ='1000px'
    btnStart.style.display ='block'
    btnStart.style.marginRight =''
    btnStart.style.background = ''
    btnStart.classList.remove('active')
    
   
    
    clear()
   
}
function clear(){
    init.value = ''
    final.value = ''
    count.value= ''
    display.innerText = '00'
    back.style.animation ='none'
  
    back.style.backgroundColor = 'red'
}