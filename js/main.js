

const openNav = document.querySelector('.open-nav')

const navBar = document.querySelector('.nav-bar')


openNav.addEventListener('click', () =>{
    
    if(!navBar.classList.contains('display')){
        navBar.classList.add('display')
        
    }else{
       navBar.classList.remove('display') 
       
    }
    
})


