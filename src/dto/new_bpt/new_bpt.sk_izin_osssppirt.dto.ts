import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOsssppirtDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOsssppirt: number; // PK

  @ApiProperty({ required: true })
  jenisPangan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jenisProduk: string;

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: true })
  kemasanprimer: string;

  @ApiProperty({ required: false })
  @IsOptional()
  lokasiPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  merekProduk: string;

  @ApiProperty({ required: true })
  namaIrt: string;

  @ApiProperty({ required: true })
  namaKbli: string;

  @ApiProperty({ required: true })
  namaPkp: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noPenyuluhpangan: string;

  @ApiProperty({ required: true })
  noPirt: string;

  @ApiProperty({ required: true })
  nodinkes: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: true })
  tglDinkes: string;

  @ApiProperty({ required: true })
  tglPertek: string;
}
