import { moduleFor, test } from 'ember-qunit';

moduleFor('route:audio', 'Unit | Route | audio', {
  needs: [
    'service:recorder',
    'service:i18n',
    'service:consts',
    'service:crypto'
  ]
});

test('decodeModel method', function(assert) {
  const route = this.subject({
    model: null
  });
  
  const execTestCase = (model, expectedResult) => {
    route.set('model', model);
    route.decodeModel(model);
    assert.deepEqual(model, expectedResult);
  };

  let model = [];
  let expectedResult = [];
  execTestCase(model, expectedResult);

  model = null;
  expectedResult = null;
  execTestCase(model, expectedResult);

  model = undefined;
  expectedResult = undefined;
  execTestCase(model, expectedResult);

  model = [
    {
        id: 3,
        name: 'griby_-_taet-led',
        url: 'assets/griby_-_taet-led.mp3'
    }
  ];

  expectedResult = [
    {
        id: 3,
        name: 'griby_-_taet-led',
        url: 'assets/griby_-_taet-led.mp3',
        isPlaying: false,
        icon: 'play_circle_outline'
    }
  ];
  execTestCase(model, expectedResult);

  model = [
    {
        id: 1,
        name: 'eldzhey_-_minimal',
        url: 'assets/eldzhey_-_minimal.mp3'
    }, {
        id: 2,
        name: 'gazirovka_-_black',
        url: 'assets/gazirovka_-_black.mp3'
    }, {
        id: 3,
        name: 'griby_-_taet-led',
        url: 'assets/griby_-_taet-led.mp3'
    }
  ];

  expectedResult = [
    {
        id: 1,
        name: 'eldzhey_-_minimal',
        url: 'assets/eldzhey_-_minimal.mp3',
        isPlaying: false,
        icon: 'play_circle_outline'
    }, {
        id: 2,
        name: 'gazirovka_-_black',
        url: 'assets/gazirovka_-_black.mp3',
        isPlaying: false,
        icon: 'play_circle_outline'
    }, {
        id: 3,
        name: 'griby_-_taet-led',
        url: 'assets/griby_-_taet-led.mp3',
        isPlaying: false,
        icon: 'play_circle_outline'
    }
  ];
  execTestCase(model, expectedResult);
});
