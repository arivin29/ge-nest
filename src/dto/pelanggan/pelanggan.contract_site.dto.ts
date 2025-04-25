import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganContractSiteDto {
  @ApiProperty({ required: true })
  idContractSite: string;

  @ApiProperty({ required: true })
  idContract: string;

  @ApiProperty({ required: true })
  idClientSite: string;

  @ApiProperty({ required: false })
  statusContractSite: string;

  @ApiProperty({ required: false })
  biayaDiawal: number;

  @ApiProperty({ required: false })
  biayaBulanan: number;

  @ApiProperty({ required: false })
  biayaAkhir: number;

  @ApiProperty({ required: false })
  nilaiTotal: number;

  @ApiProperty({ required: false })
  jumlahJadwalPerBulan: number;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
