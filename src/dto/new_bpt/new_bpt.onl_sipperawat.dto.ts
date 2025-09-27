import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSipperawatDto {
  @ApiProperty({ required: true })
  berlakuStr: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSipperawat: number; // PK

  @ApiProperty({ required: true })
  noPpni: string;

  @ApiProperty({ required: true })
  nomorStr: string;
}
