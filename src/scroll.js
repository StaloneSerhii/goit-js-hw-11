
export function scroll()  {
     const {height:test} = document.querySelector(".gallery").firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: test * 2,
  behavior: "smooth",
})}