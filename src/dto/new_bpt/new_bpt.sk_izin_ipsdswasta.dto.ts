import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpsdswastaDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIpsdswasta: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  memperhatikan: string;

  @ApiProperty({ required: true })
  namaLembaga: string;

  @ApiProperty({ required: true })
  namaSd: string;

  @ApiProperty({ required: true })
  namaYayasan: string;

  @ApiProperty({ required: true })
  noBap: string;

  @ApiProperty({ required: true })
  noBarp: string;

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  perihal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBap: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBarp: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRekom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;
}
