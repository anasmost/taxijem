const header = document.body.querySelector("header")!;
const menuToggler = document.querySelector<HTMLInputElement>("#menu-toggler");

if (menuToggler) {
  const nav = header.querySelector<HTMLUListElement>("nav ul");

  nav?.addEventListener("click", (e) => {
    if (e.target instanceof HTMLAnchorElement) {
      menuToggler.checked = false;
    }
  });
} else {
  // document.addEventListener('scroll')
}
