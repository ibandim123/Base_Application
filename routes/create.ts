module.exports = ( app ) => {
    const { create } = app.controllers
    app.get('/create', create.index)

    app.post('/profileCreate', create.createProfile);
    
};
