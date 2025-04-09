import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class ContractDto {
  @ApiProperty({ required: true })
  
  idContract: string;
  @ApiProperty({ required: true })
  
  idClient: string;
  @ApiProperty({ required: false })
  @IsOptional()
  nomorKontrak: string;
  @ApiProperty({ required: false })
  @IsOptional()
  tanggalKontrak: string;
  @ApiProperty({ required: false })
  @IsOptional()
  tanggalMulai: string;
  @ApiProperty({ required: false })
  @IsOptional()
  tanggalAkhir: string;
  @ApiProperty({ required: false })
  @IsOptional()
  durasiBulan: number;
  @ApiProperty({ required: false })
  @IsOptional()
  statusContract: string;
  @ApiProperty({ required: false })
  @IsOptional()
  refKontrakSebelumnya: string;
  @ApiProperty({ required: false })
  @IsOptional()
  namaSales: string;
  @ApiProperty({ required: false })
  @IsOptional()
  feeSales: number;
  @ApiProperty({ required: false })
  @IsOptional()
  presentaseFee: number;
  @ApiProperty({ required: false })
  @IsOptional()
  nilaiKontrak: number;
  @ApiProperty({ required: false })
  @IsOptional()
  nilaiDiawal: number;
  @ApiProperty({ required: false })
  @IsOptional()
  nilaiBulanan: number;
  @ApiProperty({ required: false })
  @IsOptional()
  nilaiAkhir: number;
  @ApiProperty({ required: false })
  @IsOptional()
  isAutoInvoice: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  catatanKontrak: string;
  @ApiProperty({ required: false })
  @IsOptional()
  dokumenUrl: string;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  idContractJenis: string;
  @ApiProperty({ required: false })
  @IsOptional()
  idKantor: string;
}
