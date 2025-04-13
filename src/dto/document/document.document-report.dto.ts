import { ApiProperty } from '@nestjs/swagger';
import { DocumentDocumentDto } from './document.document.dto';
import { AclUsersDto } from '../acl/acl.users.dto';

export class DocumentDocumentReportDto extends DocumentDocumentDto {
  @ApiProperty({ type: AclUsersDto })
  users: AclUsersDto;
}
