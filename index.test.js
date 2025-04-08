const { JSDOM } = require('jsdom');

const dom = new JSDOM(`<!DOCTYPE html><body>
  <button class="drum">w</button>
  <button class="drum">a</button>
  <button class="drum">s</button>
  <button class="drum">d</button>
  <button class="drum">j</button>
  <button class="drum">k</button>
  <button class="drum">l</button>
</body>`);

global.document = dom.window.document;
global.window = dom.window;

global.Audio = class {
  constructor(src) {
    this.src = src;
  }
  play() {
    console.log(`Playing sound from ${this.src}`);
  }
};

require('./index.js');
