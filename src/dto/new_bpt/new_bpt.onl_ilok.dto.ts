import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIlokDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIlok: number; // PK

  @ApiProperty({ required: true })
  luasTanah: string;

  @ApiProperty({ required: true })
  peruntukan: string;

  @ApiProperty({ required: true })
  statusLahan: string;
}
