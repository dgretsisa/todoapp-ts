import mongoose, { Schema } from 'mongoose';
import { ListInterface } from '../interfaces/ListInterface';

const ListSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    todos: [{ type: Schema.Types.ObjectId, ref: 'Todo' }]
});

export default mongoose.model<ListInterface>('List', ListSchema);