import {expect} from 'chai';
// import jsdom from 'jsdom';
// import fs from 'fs';

// const { JSDOM } = jsdom;

describe('Out first Test', ()=>{
  it('should pass', ()=>{
    expect(true).to.equal(true)
  })
})

// describe('index.html', ()=>{
//   it('should say hello', (done)=>{
//     const index = fs.readFileSync('./src/index.html', 'utf-8')
//     const dom = new JSDOM(index);
//     const paragraph = dom.window.document.getElementById('root');
//     console.log(paragraph)
//     // expect(paragraph.innerHTML).to.equal('Hello World');
//     done();
//   })
// })
