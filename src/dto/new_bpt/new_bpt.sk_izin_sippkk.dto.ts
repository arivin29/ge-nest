import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSippkkDto {
  @ApiProperty({ required: true })
  berlakuStr: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSippkk: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jdwlPrtk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jmlPraktek: number;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: false })
  @IsOptional()
  praktek: string;

  @ApiProperty({ required: true })
  rekomIakmi: string;

  @ApiProperty({ required: true })
  sarana: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;
}
