const {forwardTo} = require('prisma-binding')

// async + await
const Query = {
    items: forwardTo('db')
//    async items(parent, args, ctx, info) {
//        const items = await ctx.db.query.items();
//        return items
//    }
};

module.exports = Query;
