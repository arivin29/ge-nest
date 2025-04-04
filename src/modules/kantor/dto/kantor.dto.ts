import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class KantorDto {
  @ApiProperty({ required: true })
  
  idKantor: string;
  @ApiProperty({ required: true })
  
  namaKantor: string;
  @ApiProperty({ required: false })
  @IsOptional()
  kodeKantor: string;
  @ApiProperty({ required: false })
  @IsOptional()
  alamat: string;
  @ApiProperty({ required: false })
  @IsOptional()
  kota: string;
  @ApiProperty({ required: false })
  @IsOptional()
  provinsi: string;
  @ApiProperty({ required: false })
  @IsOptional()
  isPusat: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  isAktif: boolean;
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
