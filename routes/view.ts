module.exports = ( app ) => {
    const { view } = app.controllers
    app.get('/view', view.index)


    
};
