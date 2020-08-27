const package = require('./index');
package.getPackageInfo('com.giriyazaari.app', (err, result) => {
    err ?console.log('Failed with error: ', err) :console.log('Result: ', result);
    process.exit();
})