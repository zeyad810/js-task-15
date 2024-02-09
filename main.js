const users=[
    {userName:"admin",
    password:"admin"}
    ,
    {userName:"admin",
    password:"123"}
    ,
    {userName:"admin",
    password:"password"},

    {userName:"soloLeveling",
    password:"admin"}
    ,
    {userName:"soloLeveling",
    password:"this_level one"}
    ,
    {userName:"farestarik",
    password:"786554"}
    
];
for (let start = 0;  start< users.length; start++) {
    let user=users[start];
    if (user.userName != "admin" && user.password!= "password" ) {
        if (user.password!= "admin" && !user.password.startsWith("123")) {
            console.log(user)
        }
        
    }
    
}