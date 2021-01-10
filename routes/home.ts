module.exports = ( app ) => {
    const { home } = app.controllers
    app.get('/', home.index);

    app.post('/entry', home.login);
    app.get('/exit',home.logout);

}