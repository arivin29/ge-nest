import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AclModuleDto {
  @ApiProperty({ required: true })
  idModule: string;

  @ApiProperty({ required: false })
  kodeModule: string;

  @ApiProperty({ required: false })
  namaModule: string;

  @ApiProperty({ required: false })
  namaTabel: string;

  @ApiProperty({ required: false })
  deskripsi: string;

  @ApiProperty({ required: false })
  isAktif: boolean;

  @ApiProperty({ required: false })
  urutan: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
