const {forwardTo} = require('prisma-binding')

// async + await
const Query = {
    items: forwardTo('db'),
    // async items(parent, args, context, info) {
    //     const items = await context.db.query.items();
    //     return items
    // }
};

module.exports = Query;
