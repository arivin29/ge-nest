import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientSiteService } from './client_site.service';
import { ClientSiteController } from './client_site.controller';
import { PelangganClientSite } from 'src/entities/pelanggan';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganClientSite],'pelanggan')],
  controllers: [ClientSiteController],
  providers: [ClientSiteService],
})
export class ClientSiteModule {}
