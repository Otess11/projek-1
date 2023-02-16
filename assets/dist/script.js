var main_img = document.getElementById('main-img')
var small_img = document.getElementsByClassName('small-img')

// small_img[0].oneclick = function () {
//     main_img.src = small_img[0].src
    
// }

// small_img[1].oneclick = function () {
//     main_img.src = small_img[1].src
    
// }

for (let i = 0; i < small_img.length;i++) {
    small_img[i].onclick = function () {
        main_img.src = small_img[i].src
    }
    
}