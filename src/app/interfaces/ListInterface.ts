import { Document } from 'mongoose';
import { TodoInterface } from './TodoInterface';

export interface ListInterface extends Document {
    title: string;
    author: string;
    todos: TodoInterface[]
}