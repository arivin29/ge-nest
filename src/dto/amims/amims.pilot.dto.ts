import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPilotDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  hashIdUser: number;

  @ApiProperty({ required: true })
  idPilot: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  namePilot: string;

  @ApiProperty({ required: false })
  status: number;

  @ApiProperty({ required: false })
  type: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
