// console.log('Hello ');

posts = [{ title: 'Post One', body: 'This is post one' },
{ title: 'Post Two', body: 'This is post two' }];


function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title} named as ${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}


function createPost(post) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve()
            } else {
                reject("Error: Something went wrong")
            }
        }, 2000);
    })
}

function deletePost() {
    return new Promise((resolve, reject) => {
        if (posts.length > 0) {
            setTimeout(() => {
                // Delete the first element of the array
                const deletedPost = posts.pop();
                // console.log(`Post ${deletedPost} deleted`);
                resolve(deletePost);
            }, 1000);
        } else {
            reject("No more posts to delete");
        }
    });
}

// getPosts()

// createPost({ title: 'Post Three', body: 'This is post three' }).then(() => {
//     getPosts();
//     deletePost().then(() => {
//         getPosts();
//         deletePost().then(() => {
//             getPosts();
//             deletePost().then(() => {
//                 getPosts();
//                 deletePost().then(() => { }).catch(err => console.log(err));
//             })
//         })
//     })
// });


// Promise.all

// const promise1 = Promise.resolve('Hello World')
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, 'Goodbye'));

// Promise.all([promise1, promise2, promise3]).then((values) => console.log(values)).catch(error => (console.log(error)))


const updateLastUserActivityTime = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date());
        }, 1000);
    });
};

let lastActivityTime;

createPost({ title: 'Post Three', body: 'This is post three' })
    .then((post) => {
        posts.push(post);
        return updateLastUserActivityTime();
    })
    .then((activityTime) => {
        lastActivityTime = activityTime;
        console.log('Posts:', posts);
        console.log('Last activity time:', lastActivityTime);
        return deletePost()
    })
    .then(() => {
        getPosts()
    })
    .then(deletePost);

//  Why on Earth do we need promise.all ?

    // createPost and updateLastUserActivityTime promises if run in parallel using Promise.all. This allows the code to wait for both promises to resolve before logging the posts and lastActivityTime, and then deleting the last post and logging the new set of posts. Without Promise.all, you would have to wait for each promise to resolve sequentially, which would take longer and may not be as efficient.


// Need to try Promise.all :

// Promise.all([createPost,deletePost])
//     .then((post) => {
//         posts.push(post);
//         return updateLastUserActivityTime();
//     })
//     .then((activityTime) => {
//         lastActivityTime = activityTime;
//         console.log('Posts:', posts);
//         console.log('Last activity time:', lastActivityTime);
//         return deletePost()
//     }).then(() => {
//         getPosts()
//     })
