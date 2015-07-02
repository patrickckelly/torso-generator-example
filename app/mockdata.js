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
    }
  ]
});