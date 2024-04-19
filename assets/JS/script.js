/* script javascript gestion carroussel */

for (i=0;i<nb_slides;i++){
    let selected
    selected=(i===0)?true:false
    document.querySelector("div [class=dots]").appendChild(add_dot(selected,i))
}

bt_next.addEventListener("click", function () {
    let old_slide=idx_slide
    idx_slide=(idx_slide===(nb_slides-1))?0:idx_slide+1
    change_img(slides[idx_slide])
    change_dot(idx_slide,old_slide)
});


bt_back.addEventListener("click", function () {
    let old_slide=idx_slide
    idx_slide=(idx_slide===0)?nb_slides-1:idx_slide-1
    change_img(slides[idx_slide])
    change_dot(idx_slide,old_slide)
});

