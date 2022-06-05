import { BootstrapScene } from "./scenes/multiplayer/bootstrap.scene";
import { GameOverScene } from "./scenes/game-over.scene";
import { GameScene } from "./scenes/multiplayer/multiplayer.scene";
import { HomeScene } from "./scenes/home.scene";
import { PrivateMatchingScene } from "./scenes/multiplayer/private-matching.scene";
import { SinglePlayerScene } from "./scenes/singleplayer/singleplayer.scene";
import { CharacterScene } from "./scenes/singleplayer/character.scene";
import { BootScene } from "./scenes/boot.scene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Tris',
  version: '1.0',
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 360,
    height: 640,
  },
  scene: [
    BootScene,
    HomeScene, 
    BootstrapScene, 
    GameScene, 
    GameOverScene, 
    PrivateMatchingScene, 
    SinglePlayerScene, 
    CharacterScene
  ],
  backgroundColor: '#222222',

  /**Servono per inserire file html */
  parent: "customHtml",
  dom: {
    createContainer: true
  },
};


//-------------------------------------------------
// Custom object
//-------------------------------------------------
import '../src/objects/trisBoard.object';
import '../src/objects/button/button.object.ts';
import '../src/objects/dialog/dialog.object';
import '../src/objects/sliderText.object';


//-------------------------------------------------
// Per il caricamento del font custom con webpack
//-------------------------------------------------
import './style.css';
function component() {
  const element = document.createElement('div');
  element.classList.add('phaser-custom-font');
  return element;
}
document.body.appendChild(component());