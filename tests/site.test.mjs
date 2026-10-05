import {test,before,after} from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {existsSync} from 'node:fs';
import {chromium} from 'playwright';
let server,browser;
before(async()=>{
 server=spawn('python3',['-m','http.server','3100','--bind','127.0.0.1','--directory','dist'],{stdio:'ignore'});
 for(let i=0;i<40;i++){try{if((await fetch('http://127.0.0.1:3100')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await chromium.launch({headless:true,...(existsSync('/usr/bin/chromium')?{executablePath:'/usr/bin/chromium'}:{})});
});
after(async()=>{await browser?.close();server?.kill();});
test('entry and both worlds work with JavaScript disabled',async()=>{
 const page=await browser.newPage({javaScriptEnabled:false});await page.goto('http://127.0.0.1:3100');
 assert.match(await page.locator('h1').innerText(),/WENCY/);assert.equal(await page.locator('.world-choice').count(),2);
 await page.locator('.choice-academic').click();assert.match(await page.locator('h1').innerText(),/Academic/);
 await page.locator('.switch-link').click();assert.match(await page.locator('h1').innerText(),/Elsewhere/);
 await page.getByRole('link',{name:'Back to entry',exact:true}).click();assert.match(await page.locator('h1').innerText(),/WENCY/);await page.close();
});
test('all pages fit phone, tablet and desktop; local links resolve',async()=>{
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const width of [320,375,768,1440]){
  await page.setViewportSize({width,height:900});
  for(const route of ['/','/academic/','/elsewhere/']){
   const response=await page.goto('http://127.0.0.1:3100'+route);assert.equal(response.status(),200);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${width}: ${route}`);
   const hrefs=await page.locator('a').evaluateAll(links=>links.map(a=>a.getAttribute('href')).filter(h=>h?.startsWith('/')));
   for(const href of hrefs)assert.equal((await page.request.get('http://127.0.0.1:3100'+href)).status(),200);
  }
 }
 assert.deepEqual(errors,[]);await page.close();
});
test('entry choices are keyboard accessible and reduced motion is respected',async()=>{
 const page=await browser.newPage({reducedMotion:'reduce'});await page.goto('http://127.0.0.1:3100');
 await page.keyboard.press('Tab');assert.equal(await page.locator('.skip-link').evaluate(e=>e===document.activeElement),true);
 await page.keyboard.press('Tab');assert.equal(await page.locator('.choice-academic').evaluate(e=>e===document.activeElement),true);
 assert.equal(await page.locator('.world-choice').first().evaluate(e=>getComputedStyle(e).transitionDuration),'0s');
 await page.keyboard.press('Enter');await page.waitForURL('**/academic/');assert.match(await page.locator('h1').innerText(),/Academic/);await page.close();
});
