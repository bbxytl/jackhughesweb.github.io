(function($){

    $.getJSON("http://jackhughesblog.aws.af.cm/?json",
    function(data) {
        $(".posts").html('');
        var postsforpage = "";
        var num = 0;
        if(data == null){
            $(".posts").append("<div class='error'><div class='nocontenticon'></div><h3>No blog posts here yet!</h3></div>");
            return false;
        }
        $.each(data, function(i,post){
            if(post.author == "Jack Hughes" && post.category[0].name == "Post" && num < 7){
                postsforpage = postsforpage + "<div class='post'><div class='header icon-pencil'><div class='narrow'><h3>" + post.title + "</h3>" + post.date + "</div></div><div class='content'><div class='narrow'>" + post.excerpt + "<p><a href='blog/" + post.permalink.substr(36, post.permalink.length - 37) + "'>Read more &rarr;</a></p></div></div></div>";
                num++;
            }
            if(post.author == "Jack Hughes" && post.category[0].name == "Link" && num < 7){
                postsforpage = postsforpage + "<div class='post'><div class='header icon-link'><div class='narrow'><h3>" + post.title + "</h3>" + post.date + "</div></div><div class='content'><div class='narrow'>" + post.excerpt + "<p><a href='blog/" + post.permalink.substr(36, post.permalink.length - 37) + "'>Read more &rarr;</a></p></div></div></div>";
                num++;
            }
        });
        if(postsforpage == ""){
            postsforpage = "<div class='nocontenticon'></div><h3>No blog posts here yet!</h3>";
        }
        $(".posts").append(postsforpage);
        $('.posts a').each(function(){
            if($(this).attr('href').indexOf('jackhughesblog.aws.af.cm') > -1){
                $(this).remove();
            }
        });
        $("div.narrow").html().replace(/[...]]/g,'...');
    });

})(jQuery);