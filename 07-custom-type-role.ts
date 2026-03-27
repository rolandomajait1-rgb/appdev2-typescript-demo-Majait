(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'developer' | 'teacher' | 'student'

     type User = {
        name: string;
        age: number;
        role: Role;
        permission: string[];
    }

    let user: User = {
        name: 'Rolando',
        age: 25,
        role: 'developer',
        permission: ['write', 'coding', 'read', 'edit', 'delete']
    }
    console.log(user)

    

    let userRole: Role = 'admin'
     console.log(userRole)
  

    function access(role: Role) {
        console.log(`Role: ${role}`)
    }
    access('developer')
    access('admin')

})()