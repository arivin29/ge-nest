import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlOssipsmpDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlOssipsmp: number; // PK

  @ApiProperty({ required: true })
  namaSmp: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
