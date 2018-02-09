import Component from '@ember/component';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    classNames: ['audio-table'],
    hifi: service(),
    consts: service(),
    'api-request': service(),
    audios: null,
    currentSoundName: null,

    updateAllAudios(audio) {
        (this.get('audios') || []).forEach(audio => {
            set(audio, 'isPlaying', false);  
            set(audio, 'icon', this.get('consts.materialIcon.play')); 
        });

        set(audio, 'isPlaying', true);
        set(audio, 'icon', this.get('consts.materialIcon.pause'));
    },
   
    actions: {
        async play(audio) {
            //TODO: refactor it when request will works.
            //const audioFromServer = await this.get('api-request').getCurrentSound(audio.id); 
            this.get('hifi').play(audio.url);

            if (this.get('hifi.isPlaying')) {
                this.get('hifi').rewind(this.get('hifi.currentSound.duration'));
            }
            
            this.updateAllAudios(audio);
            this.updateCurrentSound(audio.name, audio.id);
        }    
    }
});
