import { DatabaseAclModule } from './database.acl.providers';  
import { DatabaseToolsModule } from './database.tools.providers';

export const DatabaseProviders = [
  DatabaseAclModule, 
  DatabaseToolsModule, 
];
