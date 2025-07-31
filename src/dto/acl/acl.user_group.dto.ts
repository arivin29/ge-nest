import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AclUserGroupDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  deskripsi: string;

  @ApiProperty({ required: true })
  idUserGroup: string;

  @ApiProperty({ required: true })
  namaUserGroup: string;

  @ApiProperty({ required: true })
  status: string;
}
