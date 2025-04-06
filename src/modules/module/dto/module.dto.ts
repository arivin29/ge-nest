import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class ModuleDto {
  @ApiProperty({ required: true })
  
  idModule: string;
  @ApiProperty({ required: false })
  @IsOptional()
  kodeModule: string;
  @ApiProperty({ required: false })
  @IsOptional()
  namaModule: string;
  @ApiProperty({ required: false })
  @IsOptional()
  namaTabel: string;
  @ApiProperty({ required: false })
  @IsOptional()
  deskripsi: string;
  @ApiProperty({ required: false })
  @IsOptional()
  isAktif: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  urutan: number;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: Date;
}
