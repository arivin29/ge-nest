import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTdDetailAcDto {
  @ApiProperty({ required: false })
  complianceC: number;

  @ApiProperty({ required: false })
  complianceD: string;

  @ApiProperty({ required: false })
  complianceH: number;

  @ApiProperty({ required: false })
  compliteC: number;

  @ApiProperty({ required: false })
  compliteD: string;

  @ApiProperty({ required: false })
  compliteH: number;

  @ApiProperty({ required: false })
  compliteUser: string;

  @ApiProperty({ required: false })
  engineer: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  idTdDetail: string;

  @ApiProperty({ required: true })
  idTdDetailAc: string;

  @ApiProperty({ required: false })
  idTechLog: string;

  @ApiProperty({ required: false })
  isActive: string;

  @ApiProperty({ required: false })
  noteClose: string;

  @ApiProperty({ required: false })
  noteDetail: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
