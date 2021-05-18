import mongoose, { Schema } from 'mongoose';
import { TodoInterface } from '../interfaces/TodoInterface';

const TodoSchema: Schema = new Schema({
    list: { type: Schema.Types.ObjectId, ref: 'List' },
    text: { type: String, required: true },
    status: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model<TodoInterface>('Todo', TodoSchema);