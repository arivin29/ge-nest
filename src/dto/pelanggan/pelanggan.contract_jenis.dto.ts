import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganContractJenisDto {
  @ApiProperty({ required: true })
  idContractJenis: string;

  @ApiProperty({ required: true })
  namaContractJenis: string;

  @ApiProperty({ required: false })
  statusContractJenis: string;

  @ApiProperty({ required: false })
  keterangan: string;

  @ApiProperty({ required: false })
  role: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
