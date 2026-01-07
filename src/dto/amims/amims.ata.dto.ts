import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsAtaDto {
  @ApiProperty({ required: true })
  idAta: string;

  @ApiProperty({ required: false })
  codeAta: string;

  @ApiProperty({ required: false })
  ata: string;

  @ApiProperty({ required: false })
  keywordAta: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  ataType: string;
}
