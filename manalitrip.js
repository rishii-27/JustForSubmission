function bookFlight() {
    return new Promise((resolve, reject) => {
        // simulate a flight booking process that takes 3 seconds
        setTimeout(() => {
            const success = Math.random() >= 0.5; // randomly determine whether the booking was successful
            if (success) {
                resolve('Flight booked successfully!');
            } else {
                reject('Error: Unable to book flight.');
            }
        }, 3000);
    });
}

function bookHotel() {
    return new Promise((resolve, reject) => {
        // simulate a hotel booking process that takes 2 seconds
        setTimeout(() => {
            const success = Math.random() >= 0.5; // randomly determine whether the booking was successful
            if (success) {
                resolve('Hotel booked successfully!');
            } else {
                reject('Error: Unable to book hotel.');
            }
        }, 2000);
    });
}

async function planTrip() {
    try {
        const [flightResult, hotelResult] = await Promise.all([bookFlight(), bookHotel()]);
        console.log(flightResult);
        console.log(hotelResult);
        console.log('Trip planned successfully!');
    } catch (error) {
        console.error(error);
    }
}

planTrip();
