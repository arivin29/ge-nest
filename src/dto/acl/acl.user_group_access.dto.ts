import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AclUserGroupAccessDto {
  @ApiProperty({ required: true })
  idUserGroupAccess: string;

  @ApiProperty({ required: true })
  idUserGroup: string;

  @ApiProperty({ required: true })
  idModule: string;

  @ApiProperty({ required: false })
  canList: boolean;

  @ApiProperty({ required: false })
  canAdd: boolean;

  @ApiProperty({ required: false })
  canEdit: boolean;

  @ApiProperty({ required: false })
  canDelete: boolean;

  @ApiProperty({ required: false })
  createdAt: string;
}
