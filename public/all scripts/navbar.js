const hamburger = document.getElementById("hamburger-icon")
const hamPanel = document.querySelector(".ham-panel")
hamburger.addEventListener("click", () => {
    if (hamPanel.classList.contains("disp-view")) {
        hamPanel.classList.remove("disp-view")
        hamburger.src = "/all img/ham.svg"

    } else {

        hamPanel.classList.add("disp-view")
        hamburger.src = "/all img/cancel-01-stroke-rounded.svg"
    }
})
const categories = document.getElementById("categories")
const categoryBox = document.querySelector(".categories")
const categoryArrow = document.getElementById("cate-img")
categories.addEventListener("click", () => {
    if (categoryBox.classList.contains("categories-view")) {
        categoryBox.classList.remove("categories-view")
        categories.style.fontWeight = "normal"
        categoryArrow.style.rotate = "0deg"
    }
    else {
        categoryBox.classList.add("categories-view")
        categories.style.fontWeight = "600"
        categoryArrow.style.rotate = "180deg"

    }
})
const hamCategories = document.querySelector(".ham-category")
const hamCategoryBox = document.querySelector(".ham-categories")
const hamCategoryArrow = document.getElementById("Categories")
hamCategories.addEventListener("click", () => {
    if (hamCategoryBox.classList.contains("ham-cat-view")) {
        hamCategoryBox.classList.remove("ham-cat-view")
        hamCategories.style.fontWeight = "normal"
        hamCategoryArrow.style.rotate = "0deg"
    }
    else {
        hamCategoryBox.classList.add("ham-cat-view")
        hamCategories.style.fontWeight = "600"
        hamCategoryArrow.style.rotate = "180deg"

    }
})
