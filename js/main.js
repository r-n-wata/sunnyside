

const openNav = document.querySelector('.open-nav')

const navBar = document.querySelector('.nav-bar')
navBar.classList.add('hidden')

openNav.addEventListener('click', () =>{
    
    if(!navBar.classList.contains('hidden')){
        navBar.classList.add('hidden')
        
    }else{
       navBar.classList.remove('hidden') 
       
    }
    
})


