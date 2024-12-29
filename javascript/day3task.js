//1.printing obj
/*obj={
    "Firstname":'Krittika',
    "Lastname":"Ravichandran",
    "Age":"19"
}
for(key in obj){
    value=obj[key]
    console.log(key,value)
}
*/

//2.what is default and why are we using it in exporting the component 


//3.insta - implement share,unshare,unpost,unlike,uncomment ( un - reject) , use flag for implementing /true or false
/*async function likeCode() {
    return new Promise((like) => {
        like("Liked post successfully.");
    });
}

async function unlikeCode() {
    return new Promise((unlike) => {
        unlike("Unliked post successfully.");
    });
}

async function commentCode() {
    return new Promise((commentPosted) => {
        commentPosted("Comment posted successfully in the post.");
    });
}

async function uncommentCode() {
    return new Promise((uncommentPosted) => {
        uncommentPosted("Comment removed successfully from the post.");
    });
}

async function createPost() {
    return new Promise((cPost) => {
        cPost("Post created successfully.");
    });
}

async function unpostCode() {
    return new Promise((uPost) => {
        uPost("Post removed successfully.");
    });
}

async function shareCode() {
    return new Promise((shared) => {
        shared("Post shared successfully.");
    });
}

async function unshareCode() {
    return new Promise((unshared) => {
        unshared("Post unshared successfully.");
    });
}


async function managePostActions() {
    try {
        const [post, comment, like, share, unlike, uncomment, unpost, unshare] = await Promise.all([
            createPost(),
            commentCode(),
            likeCode(),
            shareCode(),
            unlikeCode(),
            uncommentCode(),
            unpostCode(),
            unshareCode(),
        ]);

        console.log(post);      
        console.log(comment);   
        console.log(like);      
        console.log(share);     
        console.log(unlike);    
        console.log(uncomment); 
        console.log(unpost);    
        console.log(unshare);   
    } catch (error) {
        console.error("Error occurred in post actions:", error);
    }
}
managePostActions();
*/