import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpkuburDto {
  @ApiProperty({ required: true })
  agama: string;

  @ApiProperty({ required: true })
  blok: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpkubur: number; // PK

  @ApiProperty({ required: true })
  namaJenazah: string;

  @ApiProperty({ required: true })
  nomor: string;
}
