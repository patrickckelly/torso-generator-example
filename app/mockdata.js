var $ = require('jquery');

require('jquery-mockjax')($, window);

$.mockjax({
  url: "https://restful/fortune",
  contentType: "text",
  responseText:[
    {
      "id": 1,
      "name": 'Jerry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "id": 2,
      "name": 'Max',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "id": 3,
      "name": 'Piper',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "id": 4,
      "name": 'Barry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "id": 5,
      "name": 'Larry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "id": 6,
      "name": 'Gary',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "id": 7,
      "name": 'Berry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "id": 8,
      "name": 'Merry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "id": 9,
      "name": 'Kerry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "id": 10,
      "name": 'Perry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "id": 11,
      "name": 'Terry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    },
    {
      "id": 12,
      "name": 'Zerry',
      "title": 'Miracle Worker',
      "workplace": 'Vecna Medical'
    }
  ]
});
$.mockjax({
  url: "https://restful/donuts",
  contentType: "text",
  responseText:[
    {
      "id":1,
      "name": 'old fashoned',
      "EXP.date": '7/14/12',
    },
    {
      "id":2,
      "name": 'HoneyDew',
      "EXP-date": '7/14/12',
    },
    {
      "id":3,
      "name": 'Glazed',
      "EXP-date": '7/14/12',
    },
    {
      "id":4,
      "name": 'Chocolate',
      "EXP-date": '7/14/12',
    },
    {
      "id":5,
      "name": 'Red Velvet',
      "EXP-date": '7/14/12',
    },
    {
      "id":6,
      "name": 'Vegan',
      "EXP-date": '7/14/12',
    },
    {
      "id":7,
      "name": 'Vulcan',
      "EXP-date": '7/14/12',
    },
    {
      "id":8,
      "name": 'Boston Creme',
      "EXP-date": '7/14/12',
    },
    {
      "id":9,
      "name": 'Sprinkles',
      "EXP-date": '7/14/12',
    },
    {
      "id":10,
      "name": 'Bagel',
      "EXP-date": '7/14/12',
    },
    {
      "id":11,
      "name": 'Chocolate Glazed',
      "EXP-date": '7/14/12',
    },
    {
      "id":12,
      "name": 'new fashoned',
      "EXP-date": '7/14/12',
    }
  ]
})
$.mockjax({
  url: "https://restful/fortune/ids",
  contentType: "text",
  responseText:[3,12]
});
$.mockjax({
  url: "https://restful/donuts/ids",
  contentType: "text",
  responseText:[1,5]
})