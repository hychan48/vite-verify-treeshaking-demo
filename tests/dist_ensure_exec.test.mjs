import { describe, it} from 'mocha';
import assert from 'node:assert';
import {run as dist_run} from '##/dist/index.mjs' // multi entry points renamed the file
import fs from 'node:fs'
/**
 * Expects to build first
 * then run this test to validate
 * assumes     "build": "vite build", has been run
 * pnpm run build
 */
describe('dist_ensure_exec.test.mjs', function(){
  it('run hi = hi', function(){
    assert.strictEqual(dist_run(),'hi')
  });
  it('compares file from static and dist <= 68', function(){
    let out = fs.lstatSync('dist/index.mjs').size // og name with single entry
    let expected = fs.lstatSync('static/vite-verify-treeshaking-demo.mjs').size
    assert.strictEqual(out,expected)
    assert.ok(expected < 100)
    console.info(`expected file size: ${expected}`)
  });
  // 33kb with bigTreeShakingFile. it doesn't import if it's not used
  // about 1kb minified. so nice


});
