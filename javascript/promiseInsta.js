async function likeCode() {
    return new Promise((like)=>{
        like("liked posted Successfully.")
    })
}
async function commentCode() {
    return new Promise((commentPosted)=>{
        commentPosted("Comment posted Successfully in the post.")
    })
}
async function createPost(){
    var post = new Promise((cPost)=>{
        cPost("Post Created Successfully")
    })
    // used as a array otherwise error will display in promise.all([])
    var[posts,comment,like]=await Promise.all([post,commentCode(),likeCode()])
    //var[posts,comment,like]=await Promise.all([post,commentCode,likeCode()]) //[AsyncFunction: commentCode]
     
    console.log(posts)
    console.log(comment)
    console.log(like)

}
createPost()