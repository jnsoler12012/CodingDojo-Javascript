var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];

//¿Cómo harías print/log de la edad de John?

users.map(user => (user.name === "John") && console.log(user.age))

// ¿Cómo harías print/log del nombre del primer objeto?
console.log(users[0])

// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
for (let x = 0; x <= users.length - 1; x++) {
    console.log(users[x].name)
    console.log(users[x].age)
}

//¿Cómo harías para imprimir el nombre de los mayores de edad?
for (let x = 0; x <= users.length - 1; x++) {

    if (users[x].age > 18) {
        console.log(users[x].name + " - " + users[x].age)
    }
}
