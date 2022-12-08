console.log("script Running");
document.querySelector('.cross').style.display = 'none';
document.querySelector('.open').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.open').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        setTimeout( () => {
        document.querySelector('.cross').style.display = 'inline'
    },300)
        document.querySelector('.open').style.display = 'none'
    }
})
