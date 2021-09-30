// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


/* Get Html Elements */
const modalBtn          = document.querySelector(".modal-btn");
const modalOverlayBtn   = document.querySelector(".modal-overlay");
const closeBtn          = document.querySelector(".close-btn");

/* Add Event */
modalBtn.addEventListener("click", ()=>{
/* Add open-modal to the classliste using toggle or 'modalOverlayBtn.classList.add("open-modal")'  */
modalOverlayBtn.classList.toggle("open-modal")
})

closeBtn.addEventListener("click", ()=>{
/* remove open-modal from the classliste using toggle or 'modalOverlayBtn.classList.remove("open-modal")'  */
modalOverlayBtn.classList.toggle("open-modal")    
    })