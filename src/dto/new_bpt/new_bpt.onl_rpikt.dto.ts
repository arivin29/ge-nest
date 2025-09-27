import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlRpiktDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlRpikt: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jenis: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nomorRekom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nomorStr: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglStr: string;
}
