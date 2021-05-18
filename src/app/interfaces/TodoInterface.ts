import { Document, Schema } from 'mongoose';
import { ListInterface } from './ListInterface';

export interface TodoInterface extends Document {
    list: ListInterface['_id'];
    text: string,
    status: boolean;
}