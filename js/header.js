const btnProfile = document.querySelector(".btnProfile__info");
const dropdown = document.querySelector(".dropdownProfile");

btnProfile.addEventListener("click", () => {
    dropdown.classList.toggle("hide");
})

// window.addEventListener("click", (e) => {
//     if(e.target != btnProfile){
//         dropdown.classList.add("hide");
//         console.log("nhatbeo")
//     }
// });

