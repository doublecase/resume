$('.container .menu').on('click',function(){
    $(this).next().next().css({
        display:'block'
    })
    $(this).next().css({
        display:'block'
    })
    $(this).css({
        display:'none'
    })
})

$('.container .close').on('click',function(){
    $(this).next().css({
        display:'none'
    })
    $(this).prev().css({
        display:'block'
    })
    $(this).css({
        display:'none'
    })
})