function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate success/failure
            if (success) {
                resolve('Operation was successful.');
            } else {
                reject('Operation failed.');
            }
        }, 2000);
    });
}

asyncOperation()
    .then(message => {
        console.log(message); // Output: Operation was successful.
    })
    .catch(error => {
        console.error(error); // If it fails
    });
