const path = require('path');

module.exports = {
    entry:['babel-polyfill','./index.js'],
    output: {
        path: path.resolve(__dirname),
        filename:'bundle.js',        
    },
    devServer:{
        inline:true,
        contentBase:'.',
        port:3000
    },
    module: {
        rules: [        
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'   
            },
            {
                test: /\.json$/, 
                exclude:/node_modules/,                         
                loader:'json-loader',
                type: 'javascript/auto'   
            }  
        ]
    } 
};