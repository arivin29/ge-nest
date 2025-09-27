import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpnsdsmpDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpnsdsmp: number; // PK

  @ApiProperty({ required: true })
  namaSekolah: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
