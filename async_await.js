// console.log('Hii');

console.log('person1: shows ticket');
console.log('person2: shows ticket');

// ------------------Part1-------------------------

// const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket')
//     }, 3000);
// })

// const getPopcorn = promiseWifeBringingTickets.then((t) => {
//     console.log('wife : I have Tickets');
//     console.log('husband: Should we go In');
//     console.log('wife: no I am hungry');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} popcorn`)
//     })
// })

// const getButter = getPopcorn.then((t) => {
//     console.log('husband: I got some popcorn');
//     console.log('wife: I wann Butter on popcorn');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} butter`)
//     })
// })

// getButter.then((t) => console.log(t));

// -------------------Part2--------------------------

// const preMovie = async () => {
//     const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//         resolve('tickets Here')
//     })

//     let ticket = await promiseWifeBringingTickets;
//     return ticket;
// }
// preMovie().then((m) => console.log(m));

// --------------------Part3-------------------------

// const preMovie = async () => {
//     const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Tickets Here'), 3000);
//     })

//     const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

//     const getButter = new Promise((resolve, reject) => resolve('butter'))

//     const getColdDrink = new Promise((resolve, reject) => resolve('cold drink'))


//     let ticket = await promiseWifeBringingTickets;

//     console.log(`wife : I have ${ticket}`);
//     console.log('husband: Should we go In');
//     console.log('wife: no I am hungry');

//     let popcorn = await getPopcorn;

//     console.log(`husband: I got some ${popcorn}`);

//     let butter = await getButter;

//     console.log(`wife: I wann ${butter}`);
//     console.log('husband: Here is your butter popcorn');
//     console.log('husband : What else do you want?');

//     let colddrink = await getColdDrink;

//     console.log(`wife: I wann some ${colddrink}`);
//     console.log('husband: Lets go In now')
//     console.log("wife: yes, we're getting late");

//     return ticket;
// };
// preMovie().then((m) => console.log(`person3: Say's ${m}`))

// ----------------------part4-------------------

// const preMovie = async () => {
//     const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//         setTimeout(() => reject('Tickets Here'), 3000);
//     })

//     const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

//     const getButter = new Promise((resolve, reject) => resolve('butter'))

//     const getColdDrink = new Promise((resolve, reject) => resolve('cold drink'))

//     let ticket;
//     try {
//         ticket = await promiseWifeBringingTickets;
//     } catch (error) {
//         ticket = 'sad face'
//     }


//     let [popcorn, butter, colddrink] = await Promise.all([getPopcorn, getButter, getColdDrink])

//     console.log(`${popcorn},${butter},${colddrink}`);

//     return ticket;
// };
// preMovie().then((m) => console.log(`person3: Show's ${m}`))

// ----------------------part5----------------------

const movies = [
    { title: `A New Hope`, body: `After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.` },
    { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
]

function getMovies() {
    setTimeout(() => {
        movies.forEach((movie, index) => {
            console.log(movie.title)
        })
    }, 1000);
}

function createMovies(movie) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            movies.push(movie);

            resolve();
            // const error = false;

            // if (!error) {
            //     resolve();
            // }
            // else {
            //     reject('Error: Something went wrong!')
            // }
        }, 2000);
    })
}


function deleteMovie(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = movies.findIndex(movie => movie.title === title);
            if (index !== -1) {
                movies.splice(index, 1);
                resolve();
            } else {
                reject(`Error: Movie with title "${title}" not found.`);
            }
        }, 3000);
    });
}


async function init() {
    await createMovies({ title: `Return of the Jedi`, body: `Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.` });

    getMovies();
}

async function deleteAndGetMovies(title) {
    try {
        await deleteMovie(title);
        getMovies();
    } catch (error) {
        console.error(error);
    }
}


init();
deleteAndGetMovies('A New Hope');


console.log('person4: shows ticket');
console.log('person5: shows ticket');
