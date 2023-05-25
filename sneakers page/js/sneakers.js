let countEl = document.querySelector('.count')
let countPlus = document.querySelector('.countPlus')
let countMinus = document.querySelector('.countMinus')
let addCartBtn = document.querySelector('.addCartBtn')
let cartCountEl = document.querySelector('.cart-count')
let cartBtn = document.querySelector('.cartBtn')
let totalPriceEl = document.querySelector('.total-price')
let totalAmountEl = document.querySelector('.total-amount')
let cartContainer = document.querySelector('.cart-container')
let cartBox = document.querySelector('.cartBox')
let imgBtnsParent = document.querySelector('.imgBtns')
let mainImg = document.querySelector('.main-img img')
let emptyCartTxt = document.querySelector('.emptyCartTxt')
let deleteCartItem = document.querySelector('.deleteCartItem')
let lightBox = document.querySelector('.lightBox-container')
let closeLightBox = document.querySelector('.close-lightBox')
let prevBtn = document.querySelector('.prevBtn')
let nextBtn = document.querySelector('.nextBtn')
let mainPrevBtn = document.querySelector('.mainPrevBtn')
let mainNextBtn = document.querySelector('.mainNextBtn')
let galleryImg = document.querySelector('.gallery img')
let galleryCtrl = document.querySelector('.gallery-control')
const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar-container')
let count = 0;
let cartCount = 0;
let price = 125;
let total = 0;
let currentImg = 0;
let imgArr =
['./images/image-product-1.jpg',
'./images/image-product-2.jpg',
'./images/image-product-3.jpg',
'./images/image-product-4.jpg']

countPlus.addEventListener('click', function(){
    count++;
    countEl.innerHTML = count
})

countMinus.addEventListener('click', function(){
    count--;
    countEl.innerHTML = count
    if (count < 0) {
        count = 0
        countEl.innerHTML = count
    }
})

addCartBtn.addEventListener('click', function() {
    if (count > 0) {
        cartCountEl.classList.add('showCartCount')
        cartCount = cartCount + count
        cartCountEl.innerHTML = cartCount
    }

    if (cartCount > 0) {
        count = 0
        countEl.innerHTML = count
    }

    totalPriceEl.innerHTML = `$${price}.00 x ${cartCount} `
    totalAmountEl.textContent = `$${cartCount * price}.00`

    if (cartCount > 0) {
        cartBox.classList.add('showCartBox')
        emptyCartTxt.classList.remove('showEmptyCartTxt')
    }
})


cartBtn.addEventListener('click', function() {
    cartContainer.classList.toggle('showCartContainer')
  emptyCartTxt.classList.add('showEmptyCartTxt')
    if (cartBox.classList.contains('showCartBox')) {
        emptyCartTxt.classList.remove('showEmptyCartTxt')
    }
})


window.addEventListener('DOMContentLoaded', function() {
    mainImg.src = imgArr[0]
    galleryImg.src = imgArr[0]

    for (let i = 0; i < imgArr.length; i++) {
        let childEl = document.createElement('img')
         childEl.src = imgArr[i]
         childEl.className = 'imgBtn'
         childEl.alt = 'product image'
         childEl.onclick = () => {
            mainImg.src = childEl.src
         }
        imgBtnsParent.appendChild(childEl)
    }

    for (let i = 0; i < imgArr.length; i++) {
        let childEl = document.createElement('img')
         childEl.src = imgArr[i]
         childEl.className = 'gallery-btn'
         childEl.alt = 'product image'
         childEl.onclick = () => {
            galleryImg.src = childEl.src
         }
        galleryCtrl.appendChild(childEl)
    }
})


deleteCartItem.addEventListener('click', function() {
    cartBox.classList.remove('showCartBox')
    emptyCartTxt.classList.add('showEmptyCartTxt')
    cartCount = 0
    cartCountEl.classList.remove('showCartCount')
})

mainImg.addEventListener('click', function() {
    lightBox.classList.add('showLightBoxContainer')
})

closeLightBox.addEventListener('click', function() {
    lightBox.classList.remove('showLightBoxContainer')
})


function showImg(img) {
    galleryImg.src = imgArr[img];
}

nextBtn.addEventListener("click", function (e) {
        console.log(e.target)
    currentImg++;
    if (currentImg > imgArr.length - 1) {
        currentImg = 0;
    }
    showImg(currentImg)
});

prevBtn.addEventListener("click", function (e) {
        console.log(e.target)
    currentImg--;
    if (currentImg < 0) {
        currentImg = imgArr.length - 1;
    }
    showImg(currentImg)
});

function showMainImg(img) {
    mainImg.src = imgArr[img]
}

mainNextBtn.addEventListener("click", function () {
    currentImg++;
    if (currentImg > imgArr.length - 1) {
        currentImg = 0;
    }
    showMainImg(currentImg)
});

mainPrevBtn.addEventListener("click", function () {
    currentImg--;
    if (currentImg < 0) {
        currentImg = imgArr.length - 1;
    }
    showMainImg(currentImg)
});

toggleBtn.addEventListener('click', function() {
    sidebar.classList.add('show-sidebar')
})

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar')
});
