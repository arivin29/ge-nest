import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsWorkflowLogDto {
  @ApiProperty({ required: false })
  @IsOptional()
  approvedAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  approvedBy: string;

  @ApiProperty({ required: false })
  @IsOptional()
  catatan: string;

  @ApiProperty({ required: true })
  forModule: string;

  @ApiProperty({ required: true })
  fromModuleId: string;

  @ApiProperty({ required: true })
  idUsers: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idWorkflow: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idWorkflowLog: string; // PK

  @ApiProperty({ required: true })
  idWorkflowStep: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaUser: string;

  @ApiProperty({ required: false })
  @IsOptional()
  statusAfter: string;

  @ApiProperty({ required: false })
  @IsOptional()
  statusBefore: string;
}
