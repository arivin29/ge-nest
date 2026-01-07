import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPartAtaDto {
  @ApiProperty({ required: true })
  idPartAta: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  idAta: string;

  @ApiProperty({ required: false })
  figure: string;

  @ApiProperty({ required: false })
  item: string;
}
