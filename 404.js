(function($){

    $('body > h1').text('Blog');
    $('body > .posts').text('');

    function nl2br(str, is_xhtml) {   
        var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';    
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
    }

    function validateEmail(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    } 

    var URL = window.location.href;

    if(URL.substr(URL.length - 1) == "/"){

        window.location.href = URL.substr(0, URL.length - 1);

    }

    if(URL.indexOf("blog") < 0){

        $('h1').text('404');
        $(".posts").append("<div class='error'><div class='nocontenticon'></div><h3>Page not found</h3></div>");

    }else{

        var permalinktoget = URL.substr(URL.indexOf("blog") + 5);
        $.getJSON("http://jackhughesblog.aws.af.cm/?json",
        function(data) {
            var num = 0;
            $.each(data, function(i,post){
                if(post.author == "Jack Hughes" && post.permalink.substr(36, post.permalink.length - 37) == permalinktoget){
                    var postid = post.id;
                    $.post("http://watercodebloglikecomment.aws.af.cm/likes.php",
                    {
                        'id': post.id
                    }, function(data){
                        var datalikes = $.parseJSON(data);
                        $("div.error").remove();
                        if(post.category[0].name == "Post"){
                            var icon = "icon-pencil";
                            var url = "";
                        }else{
                            var icon = "icon-link";
                            var url = "<a href='" + post.meta.url + "'>Visit link &rarr;</a>";
                        }
                        if(datalikes.liked == 'false'){
                            $(".posts").append("<div class='post' data-id='" + post.id + "'><div class='header " + icon + "'><div class='narrow'><h3>" + post.title + url + "</h3>" + post.date + "</div></div><div class='content'><div class='narrow'>" + post.content + "</div></div></div><br><div class='narrow likebarpadding'><span class='valignmiddle'><span class='numlikes'>" + datalikes.likes + "</span> likes </span><span class='smallbuttons'><span class='button likethisbutton'>Like</span><span class='button dislikethisbutton' style='display: none;'>Dislike</span></span><span class='container'><span class='fullwidth'><span class='likethis button'>Slide to like &rarr;</span><span class='dislikethis button' style='display: none;'>Slide to dislike &rarr;</span></span></span><span class='likemessage'></span></div>");
                        }else{
                            $(".posts").append("<div class='post' data-id='" + post.id + "'><div class='header " + icon + "'><div class='narrow'><h3>" + post.title + url + "</h3>" + post.date + "</div></div><div class='content'><div class='narrow'>" + post.content + "</div></div></div><br><div class='narrow likebarpadding'><span class='valignmiddle'><span class='numlikes'>" + datalikes.likes + "</span> likes </span><span class='smallbuttons'><span class='button likethisbutton' style='display: none;'>Like</span><span class='button dislikethisbutton'>Dislike</span></span><span class='container'><span class='fullwidth'><span class='likethis button' style='display: none;'>Slide to like &rarr;</span><span class='dislikethis button'>Slide to dislike &rarr;</span></span></span><span class='likemessage'></span></div>");
                        }
                        $.post("http://watercodebloglikecomment.aws.af.cm/comments.php",
                        {
                            'id': postid
                        }, function(data2){
                            $(".posts").append(data2);
                            $('.posts').append('<table class="newcomment commentspadding"> <tr> <td colspan="2"> <strong>Add a comment</strong><br> Your email is used to display your Gravatar - it will not be displayed<br> </td> </tr> <tr class="name"> <td class="label"> <label for="name">Name:</label> </td> <td> <input name="name" placeholder="Name" class="newcommentname"></input> </td> </tr> <tr class="email"> <td class="label"> <label for="email">Email:</label> </td> <td> <input name="email" placeholder="Email" class="newcommentemail"></input> </td> </tr> <tr class="comment"> <td class="label"> <label for="comment">Comment:</label> </td> <td> <textarea name="comment" placeholder="Comment" class="newcommentcomment"></textarea> </td> </tr> <tr> <td colspan="2"> <span class="button submitcomment">Submit comment</span> </td> </tr> </table>');
                            $('.submitcomment').click(function(){
                                var valid = true;
                                if(!validateEmail($('.newcommentemail').val())){
                                    $('.newcommentemail').addClass('invalid');
                                    valid = false;
                                }
                                if($.trim($('.newcommentname').val()) == ""){
                                    $('.newcommentname').addClass('invalid');
                                    valid = false;
                                }
                                if($.trim($('.newcommentcomment').val()) == ""){
                                    $('.newcommentcomment').addClass('invalid');
                                    valid = false;
                                }
                                if(valid){
                                    var currentDate = new Date();
                                    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
                                    var day = currentDate.getDate();
                                    var month = months[currentDate.getMonth()];
                                    var year = currentDate.getFullYear();
                                    var date = month + " " + day + " " + year;
                                    $('div.narrow.commentspadding').append("<table><tr><td rowspan='3' class='userimg'><img src='http://www.gravatar.com/avatar/" + md5($('.newcommentemail').val()) + "'></td><td class='name'><strong>" + $('.newcommentname').val() + "</strong></td></tr><tr><td class='date'>" + date + "</td></tr><tr><td class='comment'>" + nl2br($('.newcommentcomment').val(), false) + "</td></tr></table>");
                                    $.post("http://watercodebloglikecomment.aws.af.cm/addcomments.php",
                                    {
                                    'name': $('.newcommentname').val(),
                                    'email': md5($('.newcommentemail').val()),
                                    'comment': $('.newcommentcomment').val(),
                                    'id': postid
                                    },function(data){
                                        if(data != '0'){
                                            alert('Error submitting message');
                                        }
                                    });
                                    $('.newcommentname').val('');
                                    $('.newcommentemail').val('');
                                    $('.newcommentcomment').val('');
                                }
                            });
                            $('input').bind('input', function(){
                                $(this).removeClass('invalid');
                            });
                            $('textarea').bind('input', function(){
                                $(this).removeClass('invalid');
                            });
                        });
                        $('.likethis').draggable({
                            containment: "parent",
                            revert: function() {
                                $(this).data("uiDraggable").originalPosition = {
                                    top : 0,
                                    left : 0
                                };
                                if($('.likethis').position().left > ($('.container').position().left + $('.container').width()) - ($('.likethis').width() + 20)){
                                    return false;
                                }else{
                                    return true;
                                }
                            },
                            stop: function() {
                                if($('.likethis').position().left > ($('.container').position().left + $('.container').width()) - ($('.likethis').width() + 20)){
                                    $.post("http://watercodebloglikecomment.aws.af.cm/likethis.php", { 'id': $('.post').data('id') });
                                    var likes = $('.numlikes').text();
                                    likes = parseFloat(likes) + 1;
                                    $('.numlikes').text(likes);
                                    $('.likethis').hide();
                                    $('.dislikethis').show();
                                    $('.likethisbutton').hide();
                                    $('.dislikethisbutton').show();
                                    $('.likemessage').text('Liked!');
                                    $('.likemessage').show();
                                    $('.likemessage').delay(500).fadeOut(500);
                                    $('.likethis').css('top','0');
                                    $('.likethis').css('left','0');
                                }
                            }
                        });
                        $('.likethisbutton').click(function(){
                            $.post("http://watercodebloglikecomment.aws.af.cm/likethis.php", { 'id': $('.post').data('id') });
                            var likes = $('.numlikes').text();
                            likes = parseFloat(likes) + 1;
                            $('.numlikes').text(likes);
                            $('.likethis').hide();
                            $('.dislikethis').show();
                            $('.likethisbutton').hide();
                            $('.dislikethisbutton').show();
                            $('.likemessage').text('Liked!');
                            $('.likemessage').show();
                            $('.likemessage').delay(500).fadeOut(500);
                            $('.likethis').css('top','0');
                            $('.likethis').css('left','0');
                        });
                        $('.dislikethisbutton').click(function(){
                            $.post("http://watercodebloglikecomment.aws.af.cm/dislikethis.php", { 'id': $('.post').data('id') });
                            var likes = $('.numlikes').text();
                            likes = parseFloat(likes) - 1;
                            $('.numlikes').text(likes);
                            $('.dislikethis').hide();
                            $('.likethis').show();
                            $('.dislikethisbutton').hide();
                            $('.likethisbutton').show();
                            $('.dislikethisbutton').hide();
                            $('.likethisbutton').show();
                            $('.likemessage').text('Disliked!');
                            $('.likemessage').show();
                            $('.likemessage').delay(500).fadeOut(500);
                            $('.dislikethis').css('top','0');
                            $('.dislikethis').css('left','0');
                        });
                        $('.dislikethis').draggable({
                            containment: "parent",
                            revert: function() {
                                $(this).data("uiDraggable").originalPosition = {
                                    top : 0,
                                    left : 0
                                };
                                if($('.dislikethis').position().left > ($('.container').position().left + $('.container').width()) - ($('.dislikethis').width() + 20)){
                                    return false;
                                }else{
                                    return true;
                                }
                            },
                            stop: function() {
                                if($('.dislikethis').position().left > ($('.container').position().left + $('.container').width()) - ($('.dislikethis').width() + 20)){
                                    $.post("http://watercodebloglikecomment.aws.af.cm/dislikethis.php", { 'id': $('.post').data('id') });
                                    var likes = $('.numlikes').text();
                                    likes = parseFloat(likes) - 1;
                                    $('.numlikes').text(likes);
                                    $('.dislikethis').hide();
                                    $('.likethis').show();
                                    $('.dislikethisbutton').hide();
                                    $('.likethisbutton').show();
                                    $('.likemessage').text('Disliked!');
                                    $('.likemessage').show();
                                    $('.likemessage').delay(500).fadeOut(500);
                                    $('.dislikethis').css('top','0');
                                    $('.dislikethis').css('left','0');
                                }
                            }
                        });
                    });
                    num++;
                }
            });
            if(num == 0){
                $(".posts").append("<div class='error'><div class='nocontenticon'></div><h3>No blog posts here yet!</h3></div>");
            }
        });

    }

})(jQuery);