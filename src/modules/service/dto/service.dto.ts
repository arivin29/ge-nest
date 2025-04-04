import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class ServiceDto {
  @ApiProperty({ required: true })
  
  idService: string;
  @ApiProperty({ required: false })
  @IsOptional()
  kodeService: string;
  @ApiProperty({ required: true })
  
  namaService: string;
  @ApiProperty({ required: false })
  @IsOptional()
  deskripsi: string;
  @ApiProperty({ required: false })
  @IsOptional()
  satuan: string;
  @ApiProperty({ required: false })
  @IsOptional()
  frekuensiDefault: number;
  @ApiProperty({ required: false })
  @IsOptional()
  hargaDefault: number;
  @ApiProperty({ required: false })
  @IsOptional()
  isAktif: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: Date;
}
