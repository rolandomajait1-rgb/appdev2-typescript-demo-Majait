let hobbies = ["Eating", "Watching", "dancing"]

// hobbies.push(10)

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["Rolando", "Rolando123", 123456]

 //console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Rolando",
    age: 31,
    hobbies: ["Eating", "Sleeping","dancing"],
    role: {
        description: 'admin',
        id: 1
    }
}

// Must not null or undefined
let val: {} = "Rolando"

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 1,
    name: 'Rolando'
    // isPartTimeInstructor: true
}
 console.log(user)