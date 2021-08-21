var li= document.getElementsByTagName("li");

document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-bar').classList.toggle('show')
});

for(i=0; i<li.length; i++){
    
    li[i].addEventListener('click', () =>{
        document.querySelector('.nav-bar').classList.toggle('show');

    });
}
