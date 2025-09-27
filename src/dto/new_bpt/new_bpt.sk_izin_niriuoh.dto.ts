import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinNiriuohDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinNiriuoh: number; // PK

  @ApiProperty({ required: true })
  Jenis: string;

  @ApiProperty({ required: true })
  kajianTeknis: string;

  @ApiProperty({ required: true })
  Nos: string;

  @ApiProperty({ required: true })
  Perihals: string;

  @ApiProperty({ required: true })
  perizinanDimiliki: string;

  @ApiProperty({ required: true })
  suratPermohonan: string;

  @ApiProperty({ required: true })
  Tgls: string;
}
