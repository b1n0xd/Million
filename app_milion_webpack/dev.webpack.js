const path = require('path');

module.exports = {
    mode: 'development',
    entry: './main/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    }
}