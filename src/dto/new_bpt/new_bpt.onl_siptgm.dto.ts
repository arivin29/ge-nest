import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSiptgmDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSiptgm: number; // PK

  @ApiProperty({ required: true })
  nomorStrtgm: string;

  @ApiProperty({ required: true })
  padaTgl: string;

  @ApiProperty({ required: true })
  pendidikan: string;
}
