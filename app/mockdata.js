var $ = require('jquery');

require('jquery-mockjax')($, window);

$.mockjax({
  url: "https://restful/fortune",
  contentType: "text",
  responseText:[
    {
      "name": 'Jerry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "name": 'Max',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "name": 'Piper',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "name": 'Barry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "name": 'Larry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "name": 'Gary',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "name": 'Berry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "name": 'Merry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "name": 'Kerry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "name": 'Perry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "name": 'Terry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "name": 'Zerry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    }
  ]
});