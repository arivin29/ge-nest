import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIaDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIa: number; // PK

  @ApiProperty({ required: true })
  masaBerlakuSia: string;

  @ApiProperty({ required: true })
  masaBerlakuSipa: string;

  @ApiProperty({ required: true })
  masaBerlakuStra: string;

  @ApiProperty({ required: true })
  noSipa: string;

  @ApiProperty({ required: true })
  noStra: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sarana: string;
}
