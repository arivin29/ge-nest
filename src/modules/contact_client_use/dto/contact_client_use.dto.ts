import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class ContactClientUseDto {
  @ApiProperty({ required: true })
  
  idContactClientUse: string;
  @ApiProperty({ required: true })
  
  idClientContact: string;
  @ApiProperty({ required: true })
  
  fromModule: string;
  @ApiProperty({ required: true })
  
  fromModuleId: string;
  @ApiProperty({ required: false })
  @IsOptional()
  peran: string;
  @ApiProperty({ required: false })
  @IsOptional()
  isPrimary: boolean;
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
