import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
    api: service(),

    //GET request to /getAllSounds.
    //This request should returns array of objects which includes only id and name of sound.
    getAllSounds() {
        this.get('api').request('getAllSounds');
    },

    //GET request to /getCurrentSound?id=1
    //This request should returns object which includes id and sound in base64 format.
    getCurrentSound(id) {
        this.get('api').request('/getCurrentSound', {
            params: {
                id
            }
        });
    },

    //POST request to /saveSound with url encoded form data name='...'&url='...'
    saveSound({url, name}) {
        this.get('api').post('saveSound', {
            data: {
                name,
                url
            }
        });
    },

    recognizeSound(audioBase64) {
        this.get('api').put('/recognizeSound', {
            params: {
                audioBase64
            }
        });
    }
});