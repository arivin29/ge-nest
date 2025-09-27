import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpgsekDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpgsek: number; // PK

  @ApiProperty({ required: true })
  namaSekolah: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
