import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class CompanyConfigDto {
  @ApiProperty({ required: true })
  
  idConfig: string;
  @ApiProperty({ required: false })
  @IsOptional()
  versiErp: string;
  @ApiProperty({ required: false })
  @IsOptional()
  namaPerusahaan: string;
  @ApiProperty({ required: false })
  @IsOptional()
  logoUrl: string;
  @ApiProperty({ required: false })
  @IsOptional()
  alamat: string;
  @ApiProperty({ required: false })
  @IsOptional()
  kontak: string;
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
