function mobile_login() {
    var isMobile = window.matchMedia("only screen and (max-width: 400px)").matches;
    if (isMobile){
        window.open('login-mb.html', "_self");
    }else{
        alert('You are in a desktop device don\'t be fool.');
    }
}