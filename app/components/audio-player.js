import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { not } from '@ember/object/computed';
import { set } from '@ember/object';

export default Component.extend({
    classNames: ['audio-player'],
    hifi: service(),
    consts: service(),

    songName: null,

    init() {
        this._super(...arguments);

        this.get('hifi').on('audio-ended', sound => {
            this.playNextSound(sound);
        });
    },

    playNextSound(sound) {
        const audios = (this.get('audios') || []);
        const currentSound = audios.findBy('url', sound.url);
        const nextSoundId = audios.indexOf(currentSound) + 1;
        const nextSound = audios[nextSoundId] ? audios[nextSoundId] : audios[0];

        this.toogleIcon(currentSound, nextSound);
        this.get('hifi').play(nextSound.url);
        this.set('songName', nextSound.name);
    },

    toogleIcon(currentSound, nextSound) {
        if (currentSound) {
            set(currentSound, 'icon', this.get('consts.materialIcon.play'));
        }

        set(nextSound, 'icon', this.get('consts.materialIcon.pause'));
    },

    /**
     * Property which controlled disable state of audio loader
     *
     * @name: disabled
     * @type: boolean
     */
    disabled: not('hifi.isPlaying'),

    playAll() {
        const firstAudio = (this.get('audios') || [])[0];
        set(firstAudio, 'icon', this.get('consts.materialIcon.pause'));
        this.get('hifi').play(firstAudio.url);
        this.set('songName', firstAudio.name);
    }
});
