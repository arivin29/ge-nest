import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIlkpDto {
  @ApiProperty({ required: false })
  @IsOptional()
  alamatSkLama: string;

  @ApiProperty({ required: true })
  badanHukum: string;

  @ApiProperty({ required: false })
  @IsOptional()
  hibah: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIlkp: number; // PK

  @ApiProperty({ required: true })
  jenisPendidikan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  memperhatikan: string;

  @ApiProperty({ required: true })
  namaLkp: string;

  @ApiProperty({ required: true })
  noBap: string;

  @ApiProperty({ required: true })
  noBarp: string;

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: true })
  pemilik: string;

  @ApiProperty({ required: false })
  @IsOptional()
  perihal: string;

  @ApiProperty({ required: true })
  rumpun: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBap: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBarp: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBerlaku: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRekom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;
}
