import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpsdswtDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIpsdswt: number; // PK

  @ApiProperty({ required: true })
  memperhatikan: string;

  @ApiProperty({ required: true })
  namasekolah: string;
}
