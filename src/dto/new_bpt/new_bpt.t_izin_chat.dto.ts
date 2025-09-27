import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinChatDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTIzinChat: number; // PK

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: true })
  isi: string;

  @ApiProperty({ required: true })
  status: boolean;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
