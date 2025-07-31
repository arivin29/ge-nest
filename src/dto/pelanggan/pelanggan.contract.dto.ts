import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganContractDto {
  @ApiProperty({ required: false })
  catatanKontrak: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dokumenUrl: string;

  @ApiProperty({ required: true })
  durasiBulan: number;

  @ApiProperty({ required: false })
  feeSales: number;

  @ApiProperty({ required: true })
  idClient: string;

  @ApiProperty({ required: true })
  idContract: string;

  @ApiProperty({ required: true })
  idContractJenis: string;

  @ApiProperty({ required: false })
  idDocument: string;

  @ApiProperty({ required: true })
  idKantor: string;

  @ApiProperty({ required: false })
  isAutoInvoice: number;

  @ApiProperty({ required: false })
  namaSales: string;

  @ApiProperty({ required: false })
  nilaiAkhir: number;

  @ApiProperty({ required: false })
  nilaiBulanan: number;

  @ApiProperty({ required: false })
  nilaiDiawal: number;

  @ApiProperty({ required: true })
  nilaiKontrak: number;

  @ApiProperty({ required: true })
  nomorKontrak: string;

  @ApiProperty({ required: false })
  presentaseFee: number;

  @ApiProperty({ required: false })
  refKontrakSebelumnya: string;

  @ApiProperty({ required: false })
  statusContract: string;

  @ApiProperty({ required: false })
  tanggalAkhir: string;

  @ApiProperty({ required: false })
  tanggalKontrak: string;

  @ApiProperty({ required: true })
  tanggalMulai: string;

  @ApiProperty({ required: false })
  top: number;

  @ApiProperty({ required: false })
  updatedAt: string;
}
