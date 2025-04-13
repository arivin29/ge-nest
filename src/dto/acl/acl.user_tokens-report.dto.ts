import { ApiProperty } from '@nestjs/swagger';
import { AclUserTokensDto } from './acl.user_tokens.dto';
import { AclUserDto } from './acl.user.dto';

export class AclUserTokensReportDto extends AclUserTokensDto {
  @ApiProperty({ type: AclUserDto })
  user: AclUserDto;
}
