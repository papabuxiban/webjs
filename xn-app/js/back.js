function isback_nojq(){
    if (window.history && window.history.pushState) {
        window.addEventListener('popstate',noback);
    }
    window.history.pushState('forward', null, '#');
    window.history.forward(1);
}
function noback(){
    window.history.pushState('forward', null, '#');
    window.history.forward(1);
    BSL.CloseTopWindow();
}
isback_nojq();