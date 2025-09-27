import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssiorswastaDto {
  @ApiProperty({ required: false })
  @IsOptional()
  direktur: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssiorswasta: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  klasifikasiRs: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaRs: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  pemilik: string;

  @ApiProperty({ required: true })
  sarana: string;

  @ApiProperty({ required: true })
  tglPertek: string;
}
