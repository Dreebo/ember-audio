import { moduleFor, test } from 'ember-qunit';

moduleFor('component:audio-player', 'Unit | Controller | audio-player-test', {
  needs: [
    'service:consts',
    'service:hifi',
    'service:poll',
    'service:hifi-cache'
  ]
});

test('toogleIcon function', function(assert) {
    const component = this.subject();

    const execTestCase = (currentSound, nextSound, currentSoundIcon, nextSoundIcon) => {
        component.toogleIcon(currentSound, nextSound);

        assert.equal(currentSound && currentSound.icon, currentSoundIcon);
        assert.equal(nextSound.icon, nextSoundIcon);
    };

    let nextSound = {
        name: 'nextSound',
        icon: null
    };
    execTestCase({name: 'currentSound', icon: null}, nextSound, 'play_circle_outline', 'pause_circle_outline');

    nextSound = {
        name: 'nextSound',
        icon: null
    };
    execTestCase(null, nextSound, null, 'pause_circle_outline');

    nextSound = {
        name: 'nextSound',
        icon: null
    };
    execTestCase(undefined, nextSound, null, 'pause_circle_outline');
});
