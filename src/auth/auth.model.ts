import { Types } from 'mongoose';
import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';


export interface AuthModel extends Base {}
export class AuthModel extends TimeStamps {
  _id: Types.ObjectId;

  @prop({ unique: true })
  email: string;

  @prop()
  passwordHash: string;
}
