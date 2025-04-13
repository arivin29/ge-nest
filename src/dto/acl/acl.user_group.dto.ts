import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AclUserGroupDto {
  @ApiProperty({ required: true })
  idUserGroup: string;

  @ApiProperty({ required: true })
  namaUserGroup: string;

  @ApiProperty({ required: true })
  status: string;

  @ApiProperty({ required: false })
  deskripsi: string;

  @ApiProperty({ required: false })
  createdAt: string;
}
