import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { not } from '@ember/object/computed';

export default Component.extend({
    classNames: ['audio-player'],
    hifi: service(),    

    /**
     * Property which controlled disable state of audio loader
     * 
     * @name: disabled
     * @type: boolean
     */
    disabled: not('hifi.isPlaying'),

    //TODO: implement logic for playing all songs.
    playAll() {
        const audioUrls = (this.get('audios') || []).map(audio => audio.url);
        this.get('hifi').play(audioUrls);
    }
});
