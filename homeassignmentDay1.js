//Day1 assignment: Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave differently when printed.

const browserVersion ="Chrome"

function getBrowserVersion()
{
    if (browserVersion=="Chrome")
        {
        var browserVersion = 10
        console.log("Supported Chrome browser version"+ browserVersion)
    }
    
    else {
        let browserVersion = 12
        console.log("Supported Other browser version"+ browserVersion)
    }
}

getBrowserVersion("Chrome")
