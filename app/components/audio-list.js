import Component from '@ember/component';
import { set, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    classNames: ['audio-list'],
    hifi: service(),
    consts: service(),
    audios: null,
    currentSongName: null,

    sendFile(file) {        
        const regexp = new RegExp(this.get('consts.allowMP3AndWAVFormatRegexp'));
        if (regexp.test(file.name)) {
            //TODO: should be request to server for save.
        }
    },

    updateAllAudios(audio) {
        (this.get('audios') || []).forEach(audio => {
            set(audio, 'isPlaying', false);  
            set(audio, 'icon', this.get('consts.materialIcon.play')); 
        });

        set(audio, 'isPlaying', true);
        set(audio, 'icon', this.get('consts.materialIcon.pause'));
    },

    actions: {
        play(audio) {
            this.get('hifi').play(audio.url);
            if (this.get('hifi.isPlaying')) {
                this.get('hifi').rewind(this.get('hifi.currentSound.duration'));
            }
            
            this.updateAllAudios(audio);
            this.set('currentSongName', audio.name);
        }
    }
});
