require('file-loader?name=[name].[ext]!./index.html');

const { Lifecycle, Device } = require('../lib/firebolt')

console.log('Sample ES5 Firebolt App')
console.dir(Device.version())

Lifecycle.listen( (event, data) => {
    console.log(event)

    if (event === "foreground") {
        const welcome = document.createElement("h1")
        welcome.innerHTML = "Firebolt Sample App is running!"
        welcome.style = "color: blue"
        document.body.appendChild(welcome)
    }
})

Lifecycle.ready()