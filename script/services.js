$(function(){

    var api = "https://reqres.in/api/";

    services = {
        login : function(obj, callback){
            var url = api + 'login';
            $.ajax({
                type: "POST",
                url: url,
                data: obj,
                success: callback
            });
        },
        lista : function(page, callback){
            var url = api + 'users?page=' + page;
            $.ajax({
                type: "GET",
                url: url,
                success: callback
            });
        }
    }

});