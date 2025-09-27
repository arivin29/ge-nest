import { DatabaseAclModule } from './database.acl.providers';  
import { DatabaseToolsModule } from './database.tools.providers';
import { DatabaseNewBptModule } from './database.new_bpt.providers';
import { DatabaseDocumentModule } from './database.document.providers';

export const DatabaseProviders = [
  DatabaseAclModule, 
  DatabaseToolsModule, 
  DatabaseNewBptModule,
  DatabaseDocumentModule,
];
