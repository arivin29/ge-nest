import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsLogTsnTsoDto {
  @ApiProperty({ required: true })
  idLogTsnTso: string;

  @ApiProperty({ required: false })
  idTechLog: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  tsnH: number;

  @ApiProperty({ required: false })
  tsnC: number;

  @ApiProperty({ required: false })
  tsoH: number;

  @ApiProperty({ required: false })
  tsoC: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  cycle: number;

  @ApiProperty({ required: false })
  hours: number;

  @ApiProperty({ required: false })
  batasId: string;
}
