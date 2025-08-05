import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTdTypeDto {
  @ApiProperty({ required: false })
  descriptionTdType: string;

  @ApiProperty({ required: true })
  idTdType: string;

  @ApiProperty({ required: false })
  tdType: string;
}
