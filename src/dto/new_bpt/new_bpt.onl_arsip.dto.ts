import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlArsipDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlArsip: number; // PK

  @ApiProperty({ required: true })
  noSurat: string;

  @ApiProperty({ required: true })
  tglKermasi: string;
}
