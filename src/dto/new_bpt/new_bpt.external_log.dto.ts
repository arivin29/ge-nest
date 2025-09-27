import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptExternalLogDto {
  @ApiProperty({ required: true })
  idExternal: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idExternalLog: number; // PK

  @ApiProperty({ required: true })
  keterangan: string;

  @ApiProperty({ required: true })
  tanggal: string;
}
