var $$=function(){};

$$.prototype={
    $id:function(id){
        return document.getElementById(id);
    },
    $tag:function(tag){
        return document.getElementsByTagName(tag);
    },
    tab:function(id){
        var box=this.$id(id);
        var spans=document.getElementsByTagName('span');
        var lis=document.getElementsByTagName('li');

        for(var i=0;i<spans.length;i++){
            spans[i].index=i;
            spans[i].onmouseover=function(){
                for(var i=0;i<spans.length;i++){
                    spans[i].className='';
                    lis[i].className='';
                }
                this.className='select';
                lis[this.index].className='select';
            }
        }
    }
}

$$=new $$();