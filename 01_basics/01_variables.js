const accountId = 15246
let accountEmail = "anilkrana474@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

accountEmail = "hello@gmail.com"
accountPassword = 12456321456
accountCity = "Lucknow"

// accountId = 2 Not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])