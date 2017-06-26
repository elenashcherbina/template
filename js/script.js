(function (){
  'use strict';
  var userData = [
    {
      userName : 'John Black',
      position : 'mMnager',
      phone : '38065567834',
      email : 'mail1@gmail.com'
    },
     {
       userName : 'Kate Grey',
       position : 'Banker',
       phone : '38065566754',
       email : 'mail2@gmail.com'
     },
     {
       userName : 'Mike Silver',
       position : 'Cooker',
       phone : '38065566754',
       email : 'mail3@gmail.com'
     }
  ],
  container = document.getElementById('container'),
  html = document.getElementById('userCard').textContent,
  template = _.template(html);
  console.log(template);
  container.innerHTML += template({data: userData});


})();

$(function(){
  $('.carousel-hider').carousel();
});
