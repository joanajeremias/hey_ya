import memeView from '/js/view/memeView.js';
import memeService from '/js/service/memeService.js';

async function init(path) {
  const memes = await memeService.render(path);
  memeView.render(memes);
}

export default { init };
