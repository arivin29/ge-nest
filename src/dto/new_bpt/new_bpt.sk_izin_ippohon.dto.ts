import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIppohonDto {
  @ApiProperty({ required: true })
  dataPohon: string;

  @ApiProperty({ required: true })
  diameter: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIppohon: number; // PK

  @ApiProperty({ required: true })
  jumlahPohon: string;

  @ApiProperty({ required: false })
  @IsOptional()
  kec: string;

  @ApiProperty({ required: true })
  lokasi: string;

  @ApiProperty({ required: true })
  memperhatikan: string;

  @ApiProperty({ required: true })
  namaPohon: string;

  @ApiProperty({ required: false })
  @IsOptional()
  pembahasan: string;

  @ApiProperty({ required: true })
  ruasJalan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tembusan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBap: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBar: string;

  @ApiProperty({ required: true })
  tinggi: string;

  @ApiProperty({ required: true })
  tujuanPenebangan: string;
}
