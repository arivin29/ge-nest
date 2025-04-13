import { ApiProperty } from '@nestjs/swagger';
import { AclUserTokensDto } from './acl.user_tokens.dto';

export class AclUserTokensWidgetDto extends AclUserTokensDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
