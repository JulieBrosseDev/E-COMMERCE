const Mutations = {
    async createItem(parent, args, context, info) {
        const Item = await context.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);
        return Item;
    }
    // createDog(parent, args, context, info) {
    //     global.dogs = global.dogs || [];
    //     const newDog = {name: args.name};
    //     global.dogs.push(newDog);
    //     return newDog;
    // }
};

module.exports = Mutations;
