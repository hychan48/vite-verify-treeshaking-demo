/**
yarn add mocha -D

package.json
  "imports": {
    "##/*": {
      "default": "./*"
    },
  },
  "type": "module",

  jsconfig.json
  {
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "##/*": ["./*"]
    }
  },
  "exclude": ["node_modules", ".nuxt", "dist"]
}



*/
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const assert = require('assert');
// const {describe,it} = require('mocha');
import assert from 'node:assert';
import { describe, it} from 'mocha';
/*
1.
yarn add mocha @babel/polyfill @babel/register @babel/preset-env babel-plugin-module-resolver --dev
yarn add @babel/core --dev
2.
-r @babel/register -r babel-plugin-module-resolver

3.
.babelrc
{

  "presets": ["@babel/preset-env"],
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "test": "./test",
        "underscore": "lodash",

        "~": "./"
      }
    }]
  ]

}
test specific timeout
this.timeout(500);//500ms
*/
/**
 * Should put this somewhere safe
 * todo filepath needs to be initialized as well...
 * @param fileName .json
 * @param data will automatically be changed
 */
import fs from 'node:fs';
function writeToFile(fileName,data,space=2){
  const sFileName = /\./.test(fileName) ? fileName : fileName + '.json';
  const filePath = `dev/pbs/test/${sFileName}`
  fs.writeFileSync(filePath,
    typeof data === 'string' ? data :JSON.stringify(data,null,+space)
  );
}
import { fileURLToPath, URL } from 'node:url'
import {resolve} from "node:path"

/*
imports.meta.url // is current file
 */
describe('filePathsDemo.test.mjs', function(){
  function log(...args){
    const {s_input,meta_url,url,file_url} = args[0]
    // console.log(...args);
    // console.log({s_input,meta_url,url,file_url} ) // url is too much clutter
    // console.log({s_input,meta_url,file_url} ) // url is too much clutter
    console.log({s_input,file_url} ) // url is too much clutter
  }
  it('import meta', function(){

    function run(s_input,meta_url = import.meta.url){
      let file_url,url
      url = new URL(s_input,meta_url)
      file_url = fileURLToPath(url);log({s_input,meta_url,url,file_url});
    }
    run('./src')
    // run(import.meta.url,'./src') //this is invalid for some erason

    run('./')
  });
  it('mjs process.cwd', function(){
    console.log(process.cwd());
    console.log(resolve()); //same command
  });
});
