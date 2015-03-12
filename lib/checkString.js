var Jscs = require('jscs')
var fs = require('fs')
var path = require('path')

var JSCS_RC = path.resolve(path.join(__dirname, '..', 'rc', '.jscsrc'))
var jscsrc = JSON.parse(fs.readFileSync(JSCS_RC,'utf8'))

function checkString (string) {
  var jscsRes = processJscs(string)
  var eslintRes = processEslint(string)
  combine(jscsRes, eslintRes)
}

function processJscs (string) {
  var jscs = new Jscs()
  jscs.getConfiguration().registerDefaultRules()
  jscs.configure(jscsrc)
  var jscsRes = jscs.checkString(string)
  return jscsRes
}

function processEslint (string) {
  // Stuff
  return 'nope'
}

function combine (jscsRes, eslintRes) {
  // This  will require some custom logic most likely
  console.log(jscsRes)
  console.log('-----')
  console.log(eslintRes)
}

module.exports = checkString
