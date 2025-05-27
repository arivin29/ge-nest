import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsAircraftDto {
  @ApiProperty({ required: true })
  idAircraft: string;

  @ApiProperty({ required: false })
  idActype: string;

  @ApiProperty({ required: false })
  registrationNumber: string;

  @ApiProperty({ required: false })
  tendurance: number;

  @ApiProperty({ required: false })
  reasonRegschange: string;

  @ApiProperty({ required: false })
  serialNumber: string;

  @ApiProperty({ required: false })
  hasapu: string;

  @ApiProperty({ required: false })
  purchasedate: string;

  @ApiProperty({ required: false })
  keywordAircraft: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  descriptionAircraft: string;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  yearMade: string;

  @ApiProperty({ required: false })
  acFoto: string;

  @ApiProperty({ required: false })
  oldActype: string;

  @ApiProperty({ required: false })
  statusAc: string;

  @ApiProperty({ required: false })
  manufactureEngine: string;

  @ApiProperty({ required: false })
  manufactureAircraft: string;

  @ApiProperty({ required: false })
  manufacturedBy: string;

  @ApiProperty({ required: false })
  manufactureDate: string;
}
