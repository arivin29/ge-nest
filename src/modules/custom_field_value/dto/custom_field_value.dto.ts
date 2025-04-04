import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class CustomFieldValueDto {
  @ApiProperty({ required: true })
  
  idCustomFieldValue: string;
  @ApiProperty({ required: true })
  
  idCustomField: string;
  @ApiProperty({ required: false })
  @IsOptional()
  modul: string;
  @ApiProperty({ required: false })
  @IsOptional()
  tableName: string;
  @ApiProperty({ required: true })
  
  modulId: string;
  @ApiProperty({ required: false })
  @IsOptional()
  nilai: string;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  kodeField: string;
  @ApiProperty({ required: false })
  @IsOptional()
  labelField: string;
}
