import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMpcGseDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dateGse: string;

  @ApiProperty({ required: false })
  idEngineerRti: string;

  @ApiProperty({ required: true })
  idMpcGse: string;

  @ApiProperty({ required: false })
  idUserGse: string;

  @ApiProperty({ required: false })
  noteGse: string;

  @ApiProperty({ required: false })
  statusGse: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
