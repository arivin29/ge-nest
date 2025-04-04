import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class FakturDto {
  @ApiProperty({ required: true })
  
  idFaktur: string;
  @ApiProperty({ required: true })
  
  idInvoice: string;
  @ApiProperty({ required: false })
  @IsOptional()
  versiFaktur: number;
  @ApiProperty({ required: false })
  @IsOptional()
  nomorFaktur: string;
  @ApiProperty({ required: false })
  @IsOptional()
  tanggalFaktur: string;
  @ApiProperty({ required: false })
  @IsOptional()
  nilaiFaktur: number;
  @ApiProperty({ required: false })
  @IsOptional()
  statusPembayaran: string;
  @ApiProperty({ required: false })
  @IsOptional()
  tanggalPembayaran: string;
  @ApiProperty({ required: false })
  @IsOptional()
  metodePembayaran: string;
  @ApiProperty({ required: false })
  @IsOptional()
  nomorReferensiPembayaran: string;
  @ApiProperty({ required: false })
  @IsOptional()
  catatan: string;
  @ApiProperty({ required: false })
  @IsOptional()
  fileFakturUrl: string;
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
