var person = (function(){
  var persons = [];
  var $container = $('.container');
  var $personInput = $container.find('.personInput');
  var $persons = $container.find('.persons');

  bindEvents();
  function bindEvents()
  {
    $persons.on('click','.delete', deletePerson);
    $personInput.on('change', addPerson);
    $personInput.on('blur', clearInput);
  }
  function clearInput()
  {
    $personInput.val('');
  }
  function render()
  {
    var data = {
      persons: persons
    };
    var template = $('#personList').html();
    var info = Mustache.to_html(template, data);
    $('.persons').html(info);
  }
  function deletePerson()
  {
    $(this).closest('li.person').remove();
    persons.splice($(this).val());
  }
  function addPerson(value)
  {
    var val = $(this).val() || value;
    if(val)
    {
        persons.push($(this).val());
    }
    render();
    clearInput();
  }
  return {
    addPerson: addPerson,
    deletePerson: deletePerson
  }
})();
