import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganCompanyConfigDto {
  @ApiProperty({ required: true })
  idCompanyConfig: string;

  @ApiProperty({ required: false })
  versiErp: string;

  @ApiProperty({ required: false })
  namaPerusahaan: string;

  @ApiProperty({ required: false })
  logoUrl: string;

  @ApiProperty({ required: false })
  alamat: string;

  @ApiProperty({ required: false })
  kontak: string;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
