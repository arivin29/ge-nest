import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class ContractSiteDto {
  @ApiProperty({ required: true })
  
  idContractSite: string;
  @ApiProperty({ required: true })
  
  idContract: string;
  @ApiProperty({ required: true })
  
  idClientSite: string;
  @ApiProperty({ required: false })
  @IsOptional()
  statusContractSite: string;
  @ApiProperty({ required: false })
  @IsOptional()
  biayaDiawal: number;
  @ApiProperty({ required: false })
  @IsOptional()
  biayaBulanan: number;
  @ApiProperty({ required: false })
  @IsOptional()
  biayaAkhir: number;
  @ApiProperty({ required: false })
  @IsOptional()
  jumlahJadwalPerBulan: number;
  @ApiProperty({ required: false })
  @IsOptional()
  catatan: string;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: Date;
}
