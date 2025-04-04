import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class ClientDto {
  @ApiProperty({ required: true })
  
  idClient: string;
  @ApiProperty({ required: false })
  @IsOptional()
  kodeClient: string;
  @ApiProperty({ required: false })
  @IsOptional()
  jenisClient: string;
  @ApiProperty({ required: true })
  
  namaResmi: string;
  @ApiProperty({ required: false })
  @IsOptional()
  namaFamiliar: string;
  @ApiProperty({ required: false })
  @IsOptional()
  npwp: string;
  @ApiProperty({ required: false })
  @IsOptional()
  emailPerusahaan: string;
  @ApiProperty({ required: false })
  @IsOptional()
  telepon: string;
  @ApiProperty({ required: false })
  @IsOptional()
  website: string;
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
  kodePos: string;
  @ApiProperty({ required: false })
  @IsOptional()
  primaryPic: string;
  @ApiProperty({ required: false })
  @IsOptional()
  logoUrl: string;
  @ApiProperty({ required: false })
  @IsOptional()
  catatan: string;
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
