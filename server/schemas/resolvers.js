const { AuthenticationError } = require('apollo-server-express');
const { User, Consumable } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("consumables");
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    consumables: async () => {
      return Consumable.find();
    },
    // NOTE that in order to access the mood data for the charts we need to add a query that populates the moods based on the consumables
    // updateConsumable: async (parent, args, context) => {
    //   if (context.consumable) {
    //     return await Consumable.findByIdAndUpdate(context.consumable._id, args, {new: true});
    //   }
    // },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {new: true});
      }
    },
    addConsumable: async (parent, {name, dosage, note}, context) => {
      // find a user by id and push the consumable id to their consumables list
      console.log(context.user)
      if (context.user) {
        const consumable = await Consumable.create({
          name,
          dosage,
          note,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { consumables: consumable._id } }
        );

        return consumable;
      }
    },
    updateConsumable: async (parent, args, context) => {
      if (context.consumable) {
        return await Consumable.findByIdAndUpdate(context.consumable._id, args, {new: true});
      }
    },
    // LOOK AT THIS addMood!
    addMood: async (parent, { consumableId, ...moods }, context) => {
      if (context.user) {
        return Consumable.findOneAndUpdate(
          { _id: consumableId },
          {
            $addToSet: {
              moods,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
