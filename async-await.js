// A function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, message: 'Hello, world!' };
            resolve(data);
        }, 1000);
    });
}

// Using async and await to handle the promise
async function getData() {
    try {
        const data = await fetchData();
        console.log(data); // Output: { id: 1, message: 'Hello, world!' }
    } catch (error) {
        console.error(error);
    }
}

getData();
