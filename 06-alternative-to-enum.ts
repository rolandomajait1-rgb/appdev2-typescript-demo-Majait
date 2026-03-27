(() => {
    // Literal Types (Alternative to Enum)
    type Role = 'admin' | 'guess' | 'teacher' | 'student'

    // anotherUserRole = 'superadmin'
    let userRole: Role = 'admin'
    console.log(userRole)
 
    userRole = 'guess'
    console.log (userRole)

    function access(role: Role ) {
         console.log(`Access granted for: ${role}`)
    }
    
})()