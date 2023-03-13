import { describe, it} from 'mocha';
import assert from 'node:assert';
import {run as dist_run} from '##cwd/dist/vite-verify-treeshaking-demo.mjs'

/**
 * Expects to build first
 * then run this test to validate
 */
describe('dist_ensure_exec.test.mjs', function(){
  it('run', function(){
    assert.strictEqual(dist_run(),'hi')
  });
  // 33kb with bigTreeShakingFile. it doesnt import if it's not used

});
