import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMPrototypeDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  file: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idMPrototype: number; // PK

  @ApiProperty({ required: true })
  jmlLnt: string;

  @ApiProperty({ required: true })
  kdb: string;

  @ApiProperty({ required: true })
  klb: string;

  @ApiProperty({ required: true })
  luasBangunan: string;

  @ApiProperty({ required: true })
  luasTanah: string;

  @ApiProperty({ required: true })
  retribusi: string;

  @ApiProperty({ required: true })
  tipe: string;

  @ApiProperty({ required: true })
  ukLahan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
