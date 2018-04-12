$(function(){
    // 点击导航栏的注册实现显示和隐藏注册页面
    $('#login').click(function(){
       $('#loginPart').toggle();    
    })

    // 点击底部小图标实现回到顶部
    $('#toTop').click(function(){
        $("html,body").animate({scrollTop:0}, 5);
    })

    


})