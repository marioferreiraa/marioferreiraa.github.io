$(function(){

    services = {
        login : function(obj, callback){
            var url = 'https://reqres.in/api/login';
            $.ajax({
                type: "POST",
                url: url,
                data: obj,
                success: callback
            });
        }
    }

});