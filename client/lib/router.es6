var applicationRoutes = FlowRouter.group({
  prefix: '/applications'
});

applicationRoutes.route('/', {
  action: () => {
    FlowLayout.render('Layout', { content: 'Applications' });
  }
});

var apprenticeRoutes = FlowRouter.group({
  prefix: '/apprentices'
});

apprenticeRoutes.route('/', {
  action: () => {
    FlowLayout.render('Layout', { content: 'Apprentices' });
  }
});

FlowRouter.route('/', {
  triggersEnter: function(context, redirect) {
    redirect('/apprentices');
  }
});

FlowLayout.setRoot('body');
