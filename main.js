
var tabLinks=document.getElementsByClassName("tab-links")
var tabContents=document.getElementsByClassName("tab-contents");
const openTab=(tabName,e) =>{
  for( let tabLink of tabLinks){
    tabLink.classList.remove("active-link");
  }
  for(let tabContent of tabContents){
    tabContent.classList.remove("active-tab");
  }
  e.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
window.openTab=openTab;

var sideMenu=document.getElementById("sidemenu");
function openMenu(){
  sideMenu.style.right="0";
}
function closeMenu(){
  sideMenu.style.right="-200px";
}
window.openMenu=openMenu;
window.closeMenu=closeMenu;

const form=document.getElementById("contact-form")
const msg=document.getElementById("msg")
form.addEventListener("submit",(e)=>{
  e.preventDefault()
  sendMail()
})

function sendMail(){
  let params={
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    subject:document.getElementById("subject").value,
    message:document.getElementById("message").value,
  }

  emailjs.send("service_vkjwwbw","template_1aq4ro4",params).then(()=>{
    form.reset()
    msg.textContent="Message successfully sent !!"
    msg.style.display="block"
    setTimeout(()=>{
      msg.style.display="none"
    },5000)
  }).catch((error)=>{
    console.error(error);
    msg.textContent="Failed to send. Please try again."
    msg.style.display="block"
    setTimeout(()=>{
      msg.style.display="none"
    },5000)
  })
}
