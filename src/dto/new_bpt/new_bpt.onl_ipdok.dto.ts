import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpdokDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpdok: number; // PK

  @ApiProperty({ required: true })
  masaBerlakuStr: string;

  @ApiProperty({ required: true })
  namaSarana: string;

  @ApiProperty({ required: true })
  noStr: string;

  @ApiProperty({ required: false })
  @IsOptional()
  norekomPdgi: string;

  @ApiProperty({ required: true })
  praktekKe: boolean;
}
