import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class InvoiceDto {
  @ApiProperty({ required: true })
  
  idInvoice: string;
  @ApiProperty({ required: false })
  @IsOptional()
  idContract: string;
  @ApiProperty({ required: false })
  @IsOptional()
  nomorInvoice: string;
  @ApiProperty({ required: false })
  @IsOptional()
  periode: string;
  @ApiProperty({ required: false })
  @IsOptional()
  jenisInvoice: string;
  @ApiProperty({ required: false })
  @IsOptional()
  dpp: number;
  @ApiProperty({ required: false })
  @IsOptional()
  ppn: number;
  @ApiProperty({ required: false })
  @IsOptional()
  nilaiInvoice: number;
  @ApiProperty({ required: false })
  @IsOptional()
  statusInvoice: string;
  @ApiProperty({ required: false })
  @IsOptional()
  npwp: string;
  @ApiProperty({ required: false })
  @IsOptional()
  alamatPenagihan: string;
  @ApiProperty({ required: false })
  @IsOptional()
  picPenagihan: string;
  @ApiProperty({ required: false })
  @IsOptional()
  tanggalTerbit: string;
  @ApiProperty({ required: false })
  @IsOptional()
  tanggalJatuhTempo: string;
  @ApiProperty({ required: false })
  @IsOptional()
  tanggalDibayar: string;
  @ApiProperty({ required: false })
  @IsOptional()
  metodePembayaran: string;
  @ApiProperty({ required: false })
  @IsOptional()
  catatan: string;
  @ApiProperty({ required: false })
  @IsOptional()
  createdBy: string;
  @ApiProperty({ required: false })
  @IsOptional()
  updatedBy: string;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: Date;
}
