Template.registerHelper('prettyDate', function(date) {
  return moment(date).format('DD/MM/YYYY');
});

Template.registerHelper('prettyDateExtended', function(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});
