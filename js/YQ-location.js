$('[YQ-location="examine"]').click(function(){
    let path = $(this).attr('YQ-href');
    if(window.location.host === 'www.hainsy.cn' || window.location.host === 'hainsy.cn'){
        window.location.href = `http://market.hainsy.cn${path}`;
        return;
    }
    window.location.href = `http://127.0.0.1:3000${path}`;
})