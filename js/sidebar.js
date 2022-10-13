const navbar = document.querySelector('.navbar').querySelectorAll("a");

navbar.forEach(element =>{
    element.addEventListener("click",function () {
        navbar.forEach(link => {
            console.log(link.href);
            if(link.href === window.location.href){
                link.classList.remove("active");
            }
        });

        this.classList.add("active");

        // if(element.href === window.location.href){
            
        // }
    })
});