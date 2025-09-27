import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptLogDto {
  @ApiProperty({ required: true, description: 'Primary Key' })
  idLog: number; // PK

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: true })
  jenisLog: string;

  @ApiProperty({ required: true })
  keterangan: string;

  @ApiProperty({ required: true })
  tanggal: string;
}
