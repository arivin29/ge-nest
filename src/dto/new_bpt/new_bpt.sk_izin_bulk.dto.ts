import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinBulkDto {
  @ApiProperty({ required: false })
  @IsOptional()
  idIzinJenis: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinBulk: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  labelSk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  paramSk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tipeData: string;

  @ApiProperty({ required: false })
  @IsOptional()
  valueSk: string;
}
