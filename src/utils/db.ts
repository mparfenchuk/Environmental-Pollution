import mongoose from 'mongoose';

export default async () => {
  if (mongoose.connections[0].readyState) return;
  const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : '';
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
};