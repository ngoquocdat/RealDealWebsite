import server from './server';

const port = parseInt(process.env.PORT || '4000');
const starter = new server().start(port)
    .then(port =>console.log(`Running on port ${port}`))
    .catch(err => {
        console.log(err)
    });

export default starter;