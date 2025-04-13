import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsLogFlowDto {
  @ApiProperty({ required: true })
  idLog: string;

  @ApiProperty({ required: false })
  idDataFlow: string;

  @ApiProperty({ required: false })
  idDataFlowDetail: string;

  @ApiProperty({ required: false })
  actionFlow: string;

  @ApiProperty({ required: false })
  idUser: number;

  @ApiProperty({ required: false })
  idPegawai: string;

  @ApiProperty({ required: false })
  createdAt: any;

  @ApiProperty({ required: false })
  updatedAt: any;
}
