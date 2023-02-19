import mongoose from 'mongoose';

export const initialize = async () => {
  return mongoose
    .connect(`${process.env.MONGODB_URI}`)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
};

export default {
  initialize,
};
