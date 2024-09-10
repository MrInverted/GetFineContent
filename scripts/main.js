try {
  const burgerTrigger = document.querySelector("#burger-trigger");
  const burgerContent = document.querySelector("#burger-content");

  burgerTrigger.onclick = () => {
    burgerTrigger.classList.toggle("active");
    burgerContent.classList.toggle("active");
  }
} catch (error) {
  console.error("burger catch,", error)
}