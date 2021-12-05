const config = require('./config.json');

module.exports = {
    env: { url: config.baseURL },
    async redirects() {
        return [
            {
                source: '/hiscores/skill',
                destination: '/hiscores/skill/overall',
                permanent: true
            },
            {
                source: '/library/bestiary',
                destination: '/library/bestiary/a',
                permanent: true
            }
        ];
    }
};
