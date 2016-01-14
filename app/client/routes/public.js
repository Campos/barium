// default landing page
FlowRouter.route('/', {
    name: 'landing',
    action () {
        BlazeLayout.render( 'DefaultLayout', { yield: 'Index' });
    }
});
