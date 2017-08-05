module.exports = {
    entry: ['./scripts/app.js'],
    output: {
        filename: './scripts/bundle.js'
    },
    watch: true, //This key will give effect of live-reload,
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
            } 
        ]
    }
}