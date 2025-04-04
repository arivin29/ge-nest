import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class CustomFieldDto {
  @ApiProperty({ required: true })
  
  idCustomField: string;
  @ApiProperty({ required: false })
  @IsOptional()
  modul: string;
  @ApiProperty({ required: false })
  @IsOptional()
  tableName: string;
  @ApiProperty({ required: false })
  @IsOptional()
  kodeField: string;
  @ApiProperty({ required: false })
  @IsOptional()
  labelField: string;
  @ApiProperty({ required: false })
  @IsOptional()
  tipeField: string;
  @ApiProperty({ required: false })
  @IsOptional()
  opsiSelect: string;
  @ApiProperty({ required: false })
  @IsOptional()
  isFilterable: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  isRequired: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  status: string;
}
