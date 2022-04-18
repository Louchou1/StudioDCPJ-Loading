fx_version 'bodacious'
games { 'gta5' }

author 'StudiosDCPJ'
description 'Ecran de chargement'
version '0.0.0'

files {
    'index.html',

    'css/index.css',
    'css/colors.css',
    'css/icomoon.css',
    
    'fonts/gravity.otf',
    'fonts/icomoon.ttf',
    
    'img/cursor.png',    
    'img/logo.png',
    
    'js/synn.js',
    'js/config.js',
    'js/logger.js',
    'js/progressbar-handler.js',
    'js/progressbar-main.js',
    'js/progressbar-renderer.js',
    'js/music-handler.js',
    'js/music-controls.js',
    'js/background-handler.js',
}

loadscreen 'index.html'

loadscreen_manual_shutdown "yes"

client_script "client.lua"
