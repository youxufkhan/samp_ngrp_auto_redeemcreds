const fs = require('fs')
var exec = require('child_process').execFile;
const homedir = require('os').homedir();
function getUserHome() {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

const documentPath = getUserHome().split("\\").join("\\\\")
console.log("Started")

setInterval(() => {

    fs.readFile(`${documentPath}\\Documents\\GTA San Andreas User Files\\SAMP\\chatlog.txt`, 'utf-8', (err, data) => {
        if (err) throw err;

        // Converting Raw Buffer to text 
        // data using tostring function.
        console.log("Matching")
        var matches = data.match(/\/redeemcreds .{10}/g)
        console.log(matches ? matches.length : '0' + " matches found");
        if (matches) {
            fs.readFile('code.txt', 'utf-8', (err, code) => {
                if (code != matches[matches.length - 1]) {
                    fs.writeFile('code.txt', matches[matches.length - 1], (err) => {
                        // In case of a error throw err. 
                        if (err) throw err;
                        console.log("Write to file complete")
                        console.log("Executing AHK")
                        exec('redeemcredits.exe', function (err, data2) {
                            if (err) { console.log(err) }
                            else { console.log("Success"); }
                        });
                    })
                }else{
                    console.log('no new code')
                }
            })
        }
    })
}, 180000)
