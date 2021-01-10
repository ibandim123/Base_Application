module.exports = ( app ) => {
    const { landing } = app.controllers
    app.get('/landing', landing.index)
};
