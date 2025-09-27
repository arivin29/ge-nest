import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSpIptkesDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSpIptkes: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jenisNakes: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSip: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noStr: string;

  @ApiProperty({ required: false })
  @IsOptional()
  perihal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sarana: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSip: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkDicabut: string;
}
