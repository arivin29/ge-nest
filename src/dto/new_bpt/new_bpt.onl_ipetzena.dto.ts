import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpetzenaDto {
  @ApiProperty({ required: true })
  agama: string;

  @ApiProperty({ required: true })
  alamat: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpetzena: number; // PK

  @ApiProperty({ required: true })
  namaJenazah: string;
}
