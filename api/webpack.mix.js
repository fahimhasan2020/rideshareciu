const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/admin.js','public/admin/admin.js')
    .styles(['public/admin/assets/css/bootstrap.min.css','public/admin/assets/css/nprogress.css','public/admin/assets/css/core.css','public/admin/assets/css/components.css','public/admin/assets/css/icons.css','public/admin/assets/css/pages.css','public/admin/assets/css/menu.css','public/admin/assets/css/responsive.css','public/admin/plugins/switchery/switchery.min.css','public/admin/plugins/morris/morris.css'], 'public/admin/admin.css')
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css/')
    .webpackConfig({
        output: {
            chunkFilename: 'js/[name].js?id=[chunkhash]',
        }
    });

