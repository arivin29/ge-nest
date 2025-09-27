import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSippmDto {
  @ApiProperty({ required: true })
  berlakuStr: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSippm: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  namaSarana: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noPertek: string;

  @ApiProperty({ required: true })
  noPpni: string;

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglPertek: string;
}
