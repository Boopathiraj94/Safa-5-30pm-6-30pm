let count = 0;
let next = () => {
    let banner_img = document.getElementById("banner-img")

    let bimgs = ['img/banner1.webp', 'img/banner2.jpg', 'img/banner3.jpg']
    count += 1

    if (count > 2) {
        count =0
    }
    console.log(count)
    banner_img.src = bimgs[count]
    // banner_img.style={right:0 ,transision:"1s"}
    banner_img.style.bottom = 0;
    banner_img.style.transition = "1s";
}