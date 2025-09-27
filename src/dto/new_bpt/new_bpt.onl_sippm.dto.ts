import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSippmDto {
  @ApiProperty({ required: true })
  berlakuStr: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSippm: number; // PK

  @ApiProperty({ required: true })
  namaSarana: string;

  @ApiProperty({ required: true })
  noPpni: string;

  @ApiProperty({ required: true })
  nomorStr: string;
}
