import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class ContractJenisDto {
  @ApiProperty({ required: true })
  
  idContractJenis: string;
  @ApiProperty({ required: true })
  
  contractJenis: string;
  @ApiProperty({ required: false })
  @IsOptional()
  statusContractJenis: string;
  @ApiProperty({ required: false })
  @IsOptional()
  keterangan: string;
  @ApiProperty({ required: false })
  @IsOptional()
  role: string;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: Date;
}
