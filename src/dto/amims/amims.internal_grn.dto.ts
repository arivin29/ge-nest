import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsInternalGrnDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dateAcc: string;

  @ApiProperty({ required: false })
  dateGrn: string;

  @ApiProperty({ required: true })
  idInternalGrn: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  idUserAcc: string;

  @ApiProperty({ required: false })
  numberGrn: string;

  @ApiProperty({ required: false })
  remark: string;

  @ApiProperty({ required: false })
  statusGrn: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validasi: number;
}
