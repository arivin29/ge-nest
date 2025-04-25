import { PelangganClient } from './pelanggan.client.entity';
import { PelangganClientContact } from './pelanggan.client_contact.entity';
import { PelangganClientSite } from './pelanggan.client_site.entity';
import { PelangganCompanyConfig } from './pelanggan.company_config.entity';
import { PelangganContactClientUse } from './pelanggan.contact_client_use.entity';
import { PelangganContract } from './pelanggan.contract.entity';
import { PelangganContractJenis } from './pelanggan.contract_jenis.entity';
import { PelangganContractSite } from './pelanggan.contract_site.entity';
import { PelangganContractSiteService } from './pelanggan.contract_site_service.entity';
import { PelangganFaktur } from './pelanggan.faktur.entity';
import { PelangganInvoice } from './pelanggan.invoice.entity';
import { PelangganKantor } from './pelanggan.kantor.entity';
import { PelangganService } from './pelanggan.service.entity';
import { PelangganTeknisi } from './pelanggan.teknisi.entity';
import { PelangganWorkSchedule } from './pelanggan.work_schedule.entity';
import { PelangganWorkScheduleTeknisi } from './pelanggan.work_schedule_teknisi.entity';

export const PelangganEntities = [
  PelangganClient,
  PelangganClientContact,
  PelangganClientSite,
  PelangganCompanyConfig,
  PelangganContactClientUse,
  PelangganContract,
  PelangganContractJenis,
  PelangganContractSite,
  PelangganContractSiteService,
  PelangganFaktur,
  PelangganInvoice,
  PelangganKantor,
  PelangganService,
  PelangganTeknisi,
  PelangganWorkSchedule,
  PelangganWorkScheduleTeknisi
];

export * from './pelanggan.client.entity';
export * from './pelanggan.client_contact.entity';
export * from './pelanggan.client_site.entity';
export * from './pelanggan.company_config.entity';
export * from './pelanggan.contact_client_use.entity';
export * from './pelanggan.contract.entity';
export * from './pelanggan.contract_jenis.entity';
export * from './pelanggan.contract_site.entity';
export * from './pelanggan.contract_site_service.entity';
export * from './pelanggan.faktur.entity';
export * from './pelanggan.invoice.entity';
export * from './pelanggan.kantor.entity';
export * from './pelanggan.service.entity';
export * from './pelanggan.teknisi.entity';
export * from './pelanggan.work_schedule.entity';
export * from './pelanggan.work_schedule_teknisi.entity';
