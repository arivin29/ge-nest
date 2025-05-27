import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPurVendor } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPurVendorDto } from 'src/dto/amims/amims.pur_vendor.dto';
            

@Injectable()
export class PurVendorService extends BaseService<AmimsPurVendor> {
  constructor(
    @InjectRepository(AmimsPurVendor,'amims')
    repo: Repository<AmimsPurVendor>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPurVendorDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPurVendorDto);
    }
}
