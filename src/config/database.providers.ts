import { DatabaseAclModule } from './database.acl.providers';
import { DatabaseAmimsModule } from './database.amims.providers';
import { DatabaseDocumentModule } from './database.document.providers';
import { DatabasePelangganModule } from './database.pelanggan.providers';
import { DatabaseToolsModule } from './database.tools.providers';

export const DatabaseProviders = [
  DatabaseAclModule,
  DatabaseDocumentModule,
  DatabasePelangganModule,
  DatabaseToolsModule,
  DatabaseAmimsModule
];
