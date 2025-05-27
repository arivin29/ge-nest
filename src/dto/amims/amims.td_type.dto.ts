import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTdTypeDto {
  @ApiProperty({ required: true })
  idTdType: string;

  @ApiProperty({ required: false })
  tdType: string;

  @ApiProperty({ required: false })
  descriptionTdType: string;
}
