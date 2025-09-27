import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AclUserGroupDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  deskripsi: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idUserGroup: string; // PK

  @ApiProperty({ required: true })
  namaUserGroup: string;

  @ApiProperty({ required: true })
  status: string;
}
