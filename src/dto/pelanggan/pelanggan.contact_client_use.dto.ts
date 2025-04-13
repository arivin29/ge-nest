import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganContactClientUseDto {
  @ApiProperty({ required: true })
  idContactClientUse: string;

  @ApiProperty({ required: true })
  idClientContact: string;

  @ApiProperty({ required: true })
  fromModule: string;

  @ApiProperty({ required: true })
  fromModuleId: string;

  @ApiProperty({ required: false })
  peran: string;

  @ApiProperty({ required: false })
  isPrimary: boolean;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
