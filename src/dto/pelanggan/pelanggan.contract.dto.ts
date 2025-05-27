import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganContractDto {
  @ApiProperty({ required: true })
  idContract: string;

  @ApiProperty({ required: true })
  idClient: string;

  @ApiProperty({ required: true })
  nomorKontrak: string;

  @ApiProperty({ required: false })
  tanggalKontrak: string;

  @ApiProperty({ required: true })
  tanggalMulai: string;

  @ApiProperty({ required: true })
  tanggalAkhir: string;

  @ApiProperty({ required: true })
  durasiBulan: number;

  @ApiProperty({ required: false })
  statusContract: string;

  @ApiProperty({ required: false })
  refKontrakSebelumnya: string;

  @ApiProperty({ required: false })
  namaSales: string;

  @ApiProperty({ required: false })
  feeSales: number;

  @ApiProperty({ required: false })
  presentaseFee: number;

  @ApiProperty({ required: true })
  nilaiKontrak: number;

  @ApiProperty({ required: false })
  nilaiDiawal: number;

  @ApiProperty({ required: false })
  nilaiBulanan: number;

  @ApiProperty({ required: false })
  nilaiAkhir: number;

  @ApiProperty({ required: false })
  isAutoInvoice: boolean;

  @ApiProperty({ required: false })
  catatanKontrak: string;

  @ApiProperty({ required: false })
  dokumenUrl: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: true })
  idContractJenis: string;

  @ApiProperty({ required: true })
  idKantor: string;

  @ApiProperty({ required: false })
  idDocument: string;
}
