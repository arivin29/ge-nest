import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMProvinsiDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idProv: string; // PK

  @ApiProperty({ required: true })
  namaProv: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
