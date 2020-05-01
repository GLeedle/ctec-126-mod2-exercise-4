function oddOrEven() {
    numLoops = prompt(`
    -------------------------------------------------
    |  Welcome to the Odd or Even Program  |
    -------------------------------------------------

    How many times would you like to run the application?`)

    userNum = 0

    for (let index = 0; index < numLoops; index++) {
        userNum = prompt("Please enter a number")
            if (userNum % 2 == 0) {
                alert(`${userNum} is an even number`)
            } else {
                alert(`${userNum} is an odd number`)
            }
    }
    alert(`
    
    Thank you for playing the Odd or Even Program
    

    
    ---- end Program`)
}

oddOrEven()