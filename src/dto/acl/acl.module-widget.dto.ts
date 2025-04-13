import { ApiProperty } from '@nestjs/swagger';
import { AclModuleDto } from './acl.module.dto';

export class AclModuleWidgetDto extends AclModuleDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
