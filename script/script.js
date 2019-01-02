if(document.querySelector('#formLogin') != null){

    document.querySelector('#formLogin').addEventListener('submit', function(e){
        e.preventDefault();
        var username = document.querySelector('#username').value,
            password = document.querySelector('#password').value;
    
        if(validaEmail(username)){
            
            var dataLogin = {
                "email" : username,
                "password" : password
            }
    
            services.login(dataLogin, callbackLogin);
    
        }else{
            alert("O email informado não é válido");
        }
    });

}

function callbackLogin(data){
    console.log(data.token);
    localStorage.setItem('tokenExe', data.token);
    localStorage.setItem('expireExe', moment().add(20, "minutes"));
    window.location.href = "/lista.html";
}

function checkExpire(){
    
}

function validaEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}