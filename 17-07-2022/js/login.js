$(".login-form").submit(function(){
    let username = $("#email").val();
    let password = $("#password").val();

    alert(username+" "+password);
});
