import {
    Controller,
    Post,
    Body,
    Req,
    UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { ApiResponseHelper } from 'src/common/helpers/response.helper';
import { WorkflowApplyDto, WorkflowService } from './workflow.service';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('workflow-apply')
@Controller('workflow/apply')
export class WorkflowApplyController {
    constructor(private readonly workflowService: WorkflowService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiOperation({ summary: 'Apply workflow step' })
    @ApiBody({ type: WorkflowApplyDto })
    async applyStep(
        @Body() body: WorkflowApplyDto,
         @CurrentUser() user: any,
    ) {
        try {
            const user_id = user?.id_users ; 
            const result = await this.workflowService.apply({ ...body, user_id });

            return ApiResponseHelper.success(result, 'create');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal menjalankan workflow', 400, error);
        }
    }
}
