import Field from './Field';
import GamePlay from './Game';

const fields = new Field();
const gameplay = new GamePlay(fields);
gameplay.init();
