import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class ContractSiteServiceDto {
  @ApiProperty({ required: true })
  
  idContractSiteService: string;
  @ApiProperty({ required: true })
  
  idContractSite: string;
  @ApiProperty({ required: true })
  
  idService: string;
  @ApiProperty({ required: false })
  @IsOptional()
  deskripsiService: string;
  @ApiProperty({ required: false })
  @IsOptional()
  frekuensiPerBulan: number;
  @ApiProperty({ required: false })
  @IsOptional()
  hargaCustom: number;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: Date;
}
