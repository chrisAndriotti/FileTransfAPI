if(process.env.NODE_ENV === 'dev'){
    const app = require('./server');
    app.init();
}

// const app = require('./server');
// app.init();