import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  to: { type: String, required: true },
  subject: { type: String, required: true },
  text: { type: String, required: true },
  html: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  delivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
});

const Email = mongoose.model('Email', emailSchema);

export default Email;