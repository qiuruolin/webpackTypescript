function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

const test = () => {
    console.log("test")
}

test()

document.body.innerHTML = greeter(user);