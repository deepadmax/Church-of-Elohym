$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var file = 'parts/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});