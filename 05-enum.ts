(() => {
    enum Role {
        // SuperAdmin,
        // SuperAdmin = 1,
        SuperAdmin = 'SuperAdmin',
        // Teacher,
        Teacher = 'Teacher',
        // Student,
        Student = 'Student',
    }

      let userRole: Role;

    userRole = Role.SuperAdmin;
    console.log(userRole)  // SuperAdmin

    userRole = Role.Teacher;
    console.log(userRole)  // Teacher

    userRole = Role.Student;
    console.log(userRole)  // Student

    console.log(Object.values(Role)) // SuperAdmin

})()