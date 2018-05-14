/*

	This script fixes performance issue on ios platfrom causing by ionic style:

	:focus,
	:active {
	  outline: none;
	}

	which causes huge style recalculations each touch start and touch end event on device causing bad performance of an app

	this script replace the rule by more adequate rule:

	:focus, input:active, textarea:active, select:active, button:active, a:active { outline: none; }

	this fix is actual until this issue remains opened:
	https://github.com/ionic-team/ionic/issues/13526
	related issue:
	https://github.com/ionic-team/ionic/issues/12733

*/



let path = require('path')
let fs = require('fs')

let filePath = path.resolve( __dirname, '../www/build/main.css')
// let filePath = path.resolve( __dirname, '../node_modules/ionic-angular/themes/util.scss')
let fileContent = fs.readFileSync( filePath, {
	encoding: 'utf8'
} )

fileContent = fileContent.replace(/:focus,\n:active {\n  outline: none;\n}/, ':focus, input:active, textarea:active, select:active, button:active, a:active { outline: none; }').replace(/:active,:focus{outline:0}/, ':focus,input:active,textarea:active,select:active,button:active,a:active{outline:0}') // minified version

fs.writeFileSync( filePath, fileContent )

console.log('ionic-fix applied')