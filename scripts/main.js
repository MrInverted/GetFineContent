try {
  const burgerTrigger = document.querySelector("#burger-trigger");
  const burgerContent = document.querySelector("#burger-content");
  const links = document.querySelectorAll("#burger-content a");

  const closeBurger = () => {
    burgerTrigger.classList.remove("active");
    burgerContent.classList.remove("active");
  }

  burgerTrigger.onclick = () => {
    burgerTrigger.classList.toggle("active");
    burgerContent.classList.toggle("active");
  }

  links.forEach(link => {
    link.onclick = closeBurger;
  });

} catch (error) {
  console.error("burger catch,", error)
}