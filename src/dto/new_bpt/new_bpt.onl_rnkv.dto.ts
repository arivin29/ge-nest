import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlRnkvDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlRnkv: number; // PK

  @ApiProperty({ required: true })
  nos: string;

  @ApiProperty({ required: true })
  perihals: string;

  @ApiProperty({ required: true })
  tgls: string;
}
