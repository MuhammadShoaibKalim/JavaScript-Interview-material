const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.fullName()); // Output: John Doe

// In a function, `this` refers to the global object (window in browsers) unless in strict mode
function show() {
    console.log(this); // In browser, this will be the Window object
}
show();
