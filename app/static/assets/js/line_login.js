$(function(){
    var liffId = '1656812670-LymVAvK7';
    liff.init({
        liffId: liffId, // Use own liffId
    })
    .then(() => {
        // start to use LIFF's api
        var islogin = liff.isLoggedIn()
        // console.log(islogin);
        if(islogin){
            liff.getProfile()
            .then(profile => {
                // console.log('profile',profile);
                var username = profile.displayName;
                var userimg = profile.pictureUrl;
                var userid = profile.userId;
                $('#username').text(username);
                $('#userimg img').attr('src',userimg);
                $('#userimg_sm img').attr('src',userimg);
                $('#login_btn').hide();
            })
            .catch((err) => {
                console.log('error', err);
            });
        }
        else {
            var userid = "";
            $('#logout_btn').hide();
            // location.href = "https://a3f6-35-188-181-193.ngrok.io"
        };
    })
    .catch((err) => {
        console.log(err);
    });
});


function login_line(){
    liff.login({ redirectUri: "https://a3f6-35-188-181-193.ngrok.io" });
};

function logout_line(){
    liff.logout();
    location.reload();
};