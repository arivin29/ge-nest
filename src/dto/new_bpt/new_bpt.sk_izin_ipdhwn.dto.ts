import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpdhwnDto {
  @ApiProperty({ required: true })
  alamatPraktik: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIpdhwn: number; // PK

  @ApiProperty({ required: true })
  instansiPenerbit: string;

  @ApiProperty({ required: true })
  jenisPraktek: string;

  @ApiProperty({ required: true })
  masaBerlaku: string;

  @ApiProperty({ required: true })
  masaBerlakuStr: string;

  @ApiProperty({ required: true })
  noRekomendasi: string;

  @ApiProperty({ required: true })
  noStr: string;

  @ApiProperty({ required: true })
  sipKe: number;

  @ApiProperty({ required: true })
  tanggalIzin: string;
}
