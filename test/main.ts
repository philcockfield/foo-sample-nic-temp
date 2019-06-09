import uiharness from '@uiharness/electron/lib/main';
const config = require('../.uiharness/config.json') as uiharness.IRuntimeConfig;

/**
 * Initialize the default [main] window process with the [UIHarness].
 *
 * NOTE:
 *  To do your own thing, simply disregard this and write your own.
 *
 *  To get started writing your own [main] entry-point:
 *    https://electronjs.org/docs/tutorial/first-app#electron-development-in-a-nutshell
 *
 *  To review the [UIHarness] entry-point as a example:
 *    https://github.com/uiharness/uiharness/blob/master/code/libs/electron/src/main/index.ts
 *
 */
(async () => {
  const { log } = await uiharness.init({ config });
  log.info('main started');

  const sodium = require('sodium-universal');
  const rnd = Buffer.allocUnsafe(12); // Cryptographically random data
  sodium.randombytes_buf(rnd);
  const r = rnd.toString('hex');
  // e.props.state$.next({ title: `rnd: ${r}` });
  log.info(r);
})();
