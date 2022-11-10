const el = document.querySelector(".card");
const wrap = document.querySelector(".card__wrapper");
let w = el.clientWidth;
let h = el.clientHeight;
let b = el.getBoundingClientRect();
el.addEventListener("mousemove", (e) => {
    // get mouse position relative to the element
    let X = (e.clientX - b.left) / w ;
    let Y = e.clientY / h ;

    // get the mouse for the blare effect
    let rX = -(X - 0.5) * 26;
    let rY = (Y - 0.5) * 26;

    // console.log(X, Y);
    // Movement of the card
    document.documentElement.style.setProperty("--x", 100 * X + "%");
    document.documentElement.style.setProperty("--y", 100 * Y + "%");

    // Blare effect
    document.documentElement.style.setProperty("--r-x", rX + "deg");
    document.documentElement.style.setProperty("--r-y", rY + "deg");

});
