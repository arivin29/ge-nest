import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinRnkvDto {
  @ApiProperty({ required: true })
  adm: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinRnkv: number; // PK

  @ApiProperty({ required: true })
  nos: string;

  @ApiProperty({ required: true })
  perihals: string;

  @ApiProperty({ required: true })
  tgls: string;
}
