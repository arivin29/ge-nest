import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPurReturnDto {
  @ApiProperty({ required: true })
  idPurReturn: string;

  @ApiProperty({ required: false })
  idPurPo: string;

  @ApiProperty({ required: false })
  dateReturn: string;

  @ApiProperty({ required: false })
  dateDeadlineReturn: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  numberReturn: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  noteReturn: string;

  @ApiProperty({ required: false })
  idPurVendor: string;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  statusReturn: string;
}
