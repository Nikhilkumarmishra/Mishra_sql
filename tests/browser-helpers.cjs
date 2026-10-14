const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const bundledChromium = require('@sparticuz/chromium').default;

exports.launch = async (baselineRendering = false) => chromium.launch({
  executablePath: await bundledChromium.executablePath(),
  args: baselineRendering ? bundledChromium.args : ['--no-sandbox', '--font-render-hinting=none', '--disable-dev-shm-usage', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'], headless: true,
});

// Test-only: the sandbox cannot reach the original CDN hosts.
// Load the same engine/editor versions from npm; never change production URLs.
exports.legacyDependencies = async (page) => {
  await page.route('**/*', async route => {
    const url = new URL(route.request().url());
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') return route.continue();
    let file;
    if (url.pathname.includes('/sql.js/1.10.2/')) {
      file = path.join(path.dirname(require.resolve('sql.js')), path.basename(url.pathname));
    } else if (url.pathname.includes('/codemirror/5.65.16/')) {
      const suffix = url.pathname.split('/codemirror/5.65.16/')[1];
      const root = path.dirname(require.resolve('codemirror/package.json'));
      file = path.join(root, suffix === 'codemirror.min.js' ? 'lib/codemirror.js' :
        suffix === 'codemirror.min.css' ? 'lib/codemirror.css' : suffix.replace('.min.', '.'));
    } else if (url.hostname === 'cdn.jsdelivr.net' && url.pathname.includes('@emailjs')) {
      file = path.join(path.dirname(require.resolve('@emailjs/browser/package.json')), 'dist/email.min.js');
    }
    if (file) return route.fulfill({ body: fs.readFileSync(file), contentType:
      file.endsWith('.wasm') ? 'application/wasm' : file.endsWith('.css') ? 'text/css' : 'application/javascript' });
    if (url.hostname.endsWith('.supabase.co')) return route.fulfill({ json: [] });
    if (route.request().resourceType() === 'image') return route.fulfill({
      contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>' });
    return route.fulfill({ body: '', contentType: 'text/css' });
  });
};
exports.freezeLegacy = async page => {
  await page.waitForSelector('#landing-page.active');
  await page.addStyleTag({content: '*,*::before,*::after { animation: none !important; transition: none !important; caret-color: transparent !important; }'});
  await page.evaluate(() => document.fonts.ready);
};
