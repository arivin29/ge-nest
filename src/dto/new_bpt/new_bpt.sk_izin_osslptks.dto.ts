import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOsslptksDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOsslptks: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jenisProgram: string;

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: true })
  perihal: string;

  @ApiProperty({ required: true })
  tglPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;
}
