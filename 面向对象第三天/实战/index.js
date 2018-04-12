var $$=function() {};
$$.prototype={
    $id:function(id){
        return document.getElementById(id);
    },
    random:function(begin,end){
        return Math.floor(Math.random()*(end-begin)+begin);
    }
}

var $$=new $$();