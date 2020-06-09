//this file connects to prisma db
const {Prisma} = require('prisma-binding');

const db = new Prisma({
    tyeDefs: 'sc/generates/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false
})

module.exports = db;