var applicationRoutes = FlowRouter.group({
  prefix: '/applications'
});

applicationRoutes.route('/', {
  action: () => {
    FlowLayout.render('Layout', { content: 'Applications' });
  }
});

FlowRouter.route('/', {
  triggersEnter: function(context, redirect) {
    redirect('/applications');
  }
});

FlowLayout.setRoot('body');
