import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';
export class User {
  private token: string;
  constructor(
    private name?: string,
    private email?: string,
    private password?: string,
    private ruleGroups?: mongoose.Types.ObjectId[],
  ) {
    this.password = password;
    this.token = uuidv4();
    this.ruleGroups = ruleGroups;
  }
}
