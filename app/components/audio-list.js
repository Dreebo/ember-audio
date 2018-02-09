import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    'api-request': service(),
    classNames: ['audio-list'],
    consts: service(),
    hifi: service(),
    audios: null,
    currentSoundName: null,

    sendFile(file) {        
        const regexp = new RegExp(this.get('consts.allowMP3AndWAVFormatRegexp'));
        if (regexp.test(file.name)) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const audioUrl = reader.result;
                this.addRecordToModel(file.name, audioUrl);
            }
            reader.readAsDataURL(file);
        }
    },

    addRecordToModel(name, url) {
        const newSound = {
            name,
            url,
            isPlaying: false,
            icon: this.get('consts.materialIcon.play')
        }
        this.get('audios').pushObject(newSound);
    },

    updateCurrentSound(name) {
        this.set('currentSoundName', name);
    },

    actions: {
        async recognize() {
            const currentSound = this.get('hifi.currentSound');
            const res = await fetch(currentSound.url);
            const blob = await res.blob();
            const reader = new FileReader();
            reader.onloadend = () => {
                const audioUrl = reader.result;
                this.get('api-request').recognizeSound(audioUrl);
            }
            await reader.readAsDataURL(blob);            
        }
    }
});
