(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'admin' | 'guess' | 'teacher' | 'student' = 'admin'
     console.log(userRole)

    userRole = 'guess'
    console.log(userRole)

    function access(role: 'admin' | 'guess' | 'teacher' | 'student') {
        console.log(`Role: ${role}`)
    }
     
    access(`admin`)
    access(`student`)
    access(`guess`)
    access(`teacher`)
    
})()