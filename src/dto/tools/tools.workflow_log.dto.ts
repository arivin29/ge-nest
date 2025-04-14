import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsWorkflowLogDto {
  @ApiProperty({ required: true })
  idLog: string;

  @ApiProperty({ required: true })
  forModule: string;

  @ApiProperty({ required: true })
  idData: string;

  @ApiProperty({ required: true })
  idStep: string;

  @ApiProperty({ required: true })
  idUsers: string;

  @ApiProperty({ required: false })
  statusBefore: string;

  @ApiProperty({ required: false })
  statusAfter: string;

  @ApiProperty({ required: false })
  approvedBy: string;

  @ApiProperty({ required: false })
  approvedAt: string;

  @ApiProperty({ required: false })
  catatan: string;
}
