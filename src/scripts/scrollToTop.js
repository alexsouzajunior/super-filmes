// Ir para o topo
let backToTop = () => {
    window.scrollTo({
      top: 0
    })
  }
  
  let topo = document.querySelector(".topo")
  
  let scrollToTop = () => {
    if (window.scrollY >= 100){
      topo.classList.add("show")
    } else{
      topo.classList.remove("show")
    }
  }
  
  window.addEventListener('scroll', function() {
    scrollToTop();
  })