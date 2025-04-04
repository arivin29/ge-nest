import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class ClientSiteDto {
  @ApiProperty({ required: true })
  
  idClientSite: string;
  @ApiProperty({ required: true })
  
  idClient: string;
  @ApiProperty({ required: false })
  @IsOptional()
  namaSite: string;
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
  kategoriSite: string;
  @ApiProperty({ required: false })
  @IsOptional()
  tagSite: string;
  @ApiProperty({ required: false })
  @IsOptional()
  latitude: string;
  @ApiProperty({ required: false })
  @IsOptional()
  longitude: string;
  @ApiProperty({ required: false })
  @IsOptional()
  isAktif: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  idKantor: string;
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
