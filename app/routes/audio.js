import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Route.extend({
    recorder: service(),
    i18n: service(),
    consts: service(),
    'api-request': service(),

    init() {
        this._super(...arguments);
        
		const recorder = this.get('recorder');
		recorder.set('recordingTime', 50000000);
    },
    
    setupController(controller) {
        this._super(...arguments);
        
		const recorder = this.get('recorder');
		controller.set('recorder', recorder);
	},

    async model() {
        //TODO: Remove it after using 'getAllSounds' request, clean assets folder and add it in gitignore file.
        const model = [{
            id: 1,
            name: 'camila-cabello-feat-young-thug_-_havana',
            url: 'assets/camila-cabello-feat-young-thug_-_havana.mp3'
        }, {
            id: 2,
            name: 'eldzhey_-_minimal',
            url: 'assets/eldzhey_-_minimal.mp3'
        }, {
            id: 3,
            name: 'gazirovka_-_black',
            url: 'assets/gazirovka_-_black.mp3'
        }, {
            id: 4,
            name: 'griby_-_taet-led',
            url: 'assets/griby_-_taet-led.mp3'
        }, {
            id: 5,
            name: 'jah-khalib_-_leyla',
            url: 'assets/jah-khalib_-_leyla.mp3'
        }, {
            id: 6,
            name: 'loboda_-_paren (1)',
            url: 'assets/loboda_-_paren (1).mp3'
        }, {
            id: 7,
            name: 'loboda_-_tvoi-glaza',
            url: 'assets/loboda_-_tvoi-glaza.mp3'
        }, {
            id: 8,
            name: 'luis-fonsi_-_despacito',
            url: 'assets/luis-fonsi_-_despacito.mp3'
        }, {
            id: 9,
            name: 'maks-korzh_-_gory-po-koleno',
            url: 'assets/maks-korzh_-_gory-po-koleno.mp3'
        }, {
            id: 10,
            name: 'maks-korzh_-_malinovyy-zakat',
            url: 'assets/maks-korzh_-_malinovyy-zakat.mp3'
        }, {
            id: 11,
            name: 'natalya-mogilevskaya_-_ya-tancevala',
            url: 'assets/natalya-mogilevskaya_-_ya-tancevala.mp3'
        }, {
            id: 12,
            name: 'post-malone_-_rockstar',
            url: 'assets/post-malone_-_rockstar.mp3'
        }, {
            id: 13,
            name: 'loboda_-_paren',
            url: 'assets/loboda_-_paren.mp3'
        }];

        //TODO: Uncomment it.
        // const model = await this.get('api-request').getAllSounds();
        this.decodeModel(model);

        return model;
    },

    decodeModel(model) {
        (model || []).forEach(item => {
            set(item, 'isPlaying', false);
            set(item, 'icon', this.get('consts.materialIcon.play'));
        });
    }
});