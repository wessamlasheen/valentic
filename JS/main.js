let allProductDiv = document.querySelector(".all-products");
let productsData = [
  {
    id: 1,
    name: "iphone galaxy ",
    previousPrice: "29.34 ",
    currentPrice: " 47.99",
    img: "Imgs/product-08.png",
    isOffer: "true",
    addedToCard: false,
  },
  {
    id: 2,
    name: "opp 34",
    previousPrice: " 134.99",
    currentPrice: " 99.99",
    img: "Imgs/product-02.png",
    addedToCard: false,
  },
  {
    id: 3,
    name: "hwawi mac ",
    previousPrice: "78.45",
    currentPrice: " 34.56",
    img: "Imgs/product-03.png",
    isOffer: "true",
    addedToCard: false,
  },
  {
    id: 4,
    name: "apple34  ",
    previousPrice: "87.34",
    currentPrice: " 29.65",
    img: "Imgs/product-04.png",
    addedToCard: false,
  },
  {
    id: 5,
    name: "product 5",
    previousPrice: " 123.45",
    currentPrice: " 56.78",
    img: "Imgs/product-03.png",
    addedToCard: false,
  },
  {
    id: 6,
    name: "new vergion ",
    previousPrice: "123.56 ",
    currentPrice: " 56,87",
    img: "Imgs/product-06.png",
    addedToCard: false,
  },
  {
    id: 7,
    name: "product7 ",
    previousPrice: " 123.45",
    currentPrice: " 56.78",
    img: "Imgs/product-07.png",
    addedToCard: false,
  },
  {
    id: 8,
    name: "new vergion ",
    previousPrice: "123.56 ",
    currentPrice: " 56,87",
    img: "Imgs/product-08.png",
    isOffer: "true",
    addedToCard: false,
  },
];
// set the products array in local storage

// ${productsData[i].isOffer ? <div class="off-ribbon">20% off</div> : ""}

localStorage.setItem("productsData", JSON.stringify(productsData));
let productBox = "";
function productHandler() {
  if (localStorage.productsData !== null) {
    productsData = JSON.parse(localStorage.productsData);

    for (let i = 0; i < productsData.length; i++) {
      productBox += `<div class="product-box">
     
      <div class="product-img">
        <img src=${productsData[i].img} />
        <div class="product-hover-action">
          <ul class="cart-action">
            <li class="quickview">
              <a href="" name=${productsData[i].name}>
              view</a>
            </li>
            <li class="select-option">
              <a href="" id=${i + 1}>Add To Card</a>
            </li>
          </ul>
        </div>
      </div>
      <h4 class="product-name">${productsData[i].name}</h4>
      <div class="product-price">
        <span class="current">${productsData[i].currentPrice}</span>
        <span class="previous">${productsData[i].previousPrice}</span>
      </div>
    </div>`;

      allProductDiv.innerHTML = productBox;
    }
    // return productsData
  } else {
    return productsData;
  }

  let nuOfProductsAdded = 0;
  let productNum = document.querySelector(".product-num");
  productNum.innerHTML = nuOfProductsAdded;

  let dropDown = document.querySelector(".dropdown-content");

  let dropChild = "";
  function addCardHandler() {
    let addCardBtns = [...document.querySelectorAll(".select-option a")];
    addCardBtns.forEach((ele) => {
      ele.onclick = function (e) {
        e.preventDefault();
        productsData.forEach((ele) => {
          if (ele.id === +e.target.id) {
            ele.addedToCard = !ele.addedToCard;
            if (ele.addedToCard === true) {
              e.target.innerHTML = "Remove";
              nuOfProductsAdded++;
              productNum.innerHTML = nuOfProductsAdded;

              dropChild = `<a href="#" id=${e.target.id}>${ele.name}</a>`;
              dropDown.innerHTML += dropChild;
            } else {
              nuOfProductsAdded--;
              productNum.innerHTML = nuOfProductsAdded;
              e.target.innerHTML = "Add To Card";
              document.getElementById(e.target.id).remove();
            }
          }
        });
      };
    });
  }
  addCardHandler();
}

window.addEventListener("load", productHandler);

// end of main page of products
