import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIkkeDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIkke: number; // PK

  @ApiProperty({ required: true })
  klasifikasiKlinik: string;

  @ApiProperty({ required: true })
  rekom: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: true })
  tglBap: string;

  @ApiProperty({ required: true })
  tglBapl: string;
}
