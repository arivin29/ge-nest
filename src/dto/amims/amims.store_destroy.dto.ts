import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsStoreDestroyDto {
  @ApiProperty({ required: true })
  idStoreDestroy: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  refRti: string;

  @ApiProperty({ required: false })
  dateDestroy: string;

  @ApiProperty({ required: false })
  noteDestroy: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  numberDestroy: string;
}
