-- SQL CREATE TABLE untuk maintenance_program_document
CREATE TABLE IF NOT EXISTS `maintenance_program_document` (
  `id_maintenance_program_document` VARCHAR(36) NOT NULL,
  `id_maintenance_program` VARCHAR(36) NOT NULL,
  `id_maintenance_document` VARCHAR(36) NOT NULL,
  `title` VARCHAR(255) DEFAULT NULL,
  `reference` VARCHAR(255) DEFAULT NULL,
  `revisi` VARCHAR(50) DEFAULT NULL,
  `revision` VARCHAR(50) DEFAULT NULL,
  `keterangan` TEXT DEFAULT NULL,
  `from` VARCHAR(255) DEFAULT NULL,
  `workshet_form` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_maintenance_program_document`),
  KEY `idx_maintenance_program` (`id_maintenance_program`),
  KEY `idx_maintenance_document` (`id_maintenance_document`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- SQL CREATE TABLE untuk maintenance_program_item
CREATE TABLE IF NOT EXISTS `maintenance_program_item` (
  `id_maintenance_program_item` VARCHAR(36) NOT NULL,
  `id_maintenance_program` VARCHAR(36) NOT NULL,
  `id_maintenance` VARCHAR(36) DEFAULT NULL,
  `id_maintenance_code` VARCHAR(36) DEFAULT NULL,
  `id_mpart` VARCHAR(36) DEFAULT NULL,
  `hours_to` DECIMAL(10,2) DEFAULT NULL,
  `cycle_to` INT DEFAULT NULL,
  `time_to` INT DEFAULT NULL,
  `time_to_unit` VARCHAR(50) DEFAULT NULL,
  `sequence_no` INT DEFAULT NULL,
  `is_active` TINYINT(1) DEFAULT 1,
  `note` TEXT DEFAULT NULL,
  PRIMARY KEY (`id_maintenance_program_item`),
  KEY `idx_maintenance_program` (`id_maintenance_program`),
  KEY `idx_maintenance` (`id_maintenance`),
  KEY `idx_maintenance_code` (`id_maintenance_code`),
  KEY `idx_mpart` (`id_mpart`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- SQL CREATE TABLE untuk maintenance_program_material
CREATE TABLE IF NOT EXISTS `maintenance_program_material` (
  `id_maintenance_program_material` VARCHAR(36) NOT NULL,
  `id_maintenance_program` VARCHAR(36) NOT NULL,
  `id_mpart` VARCHAR(36) DEFAULT NULL,
  `item_name` VARCHAR(255) DEFAULT NULL,
  `item_type` VARCHAR(100) DEFAULT NULL,
  `part_number` VARCHAR(100) DEFAULT NULL,
  `quantity` DECIMAL(10,2) DEFAULT NULL,
  `unit` VARCHAR(50) DEFAULT NULL,
  `tool_code` VARCHAR(100) DEFAULT NULL,
  `status` VARCHAR(50) DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_maintenance_program_material`),
  KEY `idx_maintenance_program` (`id_maintenance_program`),
  KEY `idx_mpart` (`id_mpart`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Optional: Add foreign key constraints if needed
-- ALTER TABLE `maintenance_program_document` 
--   ADD CONSTRAINT `fk_mpd_maintenance_program` FOREIGN KEY (`id_maintenance_program`) REFERENCES `maintenance_program`(`id_maintenance_program`) ON DELETE CASCADE;

-- ALTER TABLE `maintenance_program_item` 
--   ADD CONSTRAINT `fk_mpi_maintenance_program` FOREIGN KEY (`id_maintenance_program`) REFERENCES `maintenance_program`(`id_maintenance_program`) ON DELETE CASCADE;

-- ALTER TABLE `maintenance_program_material` 
--   ADD CONSTRAINT `fk_mpm_maintenance_program` FOREIGN KEY (`id_maintenance_program`) REFERENCES `maintenance_program`(`id_maintenance_program`) ON DELETE CASCADE;
