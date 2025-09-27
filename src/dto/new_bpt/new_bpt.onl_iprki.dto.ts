import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIprkiDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIprki: number; // PK

  @ApiProperty({ required: true })
  luasBpsp: string;

  @ApiProperty({ required: true })
  luasKapling: string;

  @ApiProperty({ required: true })
  luasKawasan: string;

  @ApiProperty({ required: true })
  luasPrasarana: string;

  @ApiProperty({ required: true })
  luasRth: string;

  @ApiProperty({ required: true })
  luasSarjung: string;
}
