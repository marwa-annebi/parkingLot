-- CreateTable
CREATE TABLE `Parking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parkingName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Parking_id_key`(`id`),
    UNIQUE INDEX `Parking_parkingName_key`(`parkingName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Floor` (
    `id` INTEGER NOT NULL,
    `parkingId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Slot` (
    `id` VARCHAR(191) NOT NULL,
    `slotNumber` INTEGER NOT NULL,
    `free` BOOLEAN NOT NULL DEFAULT true,
    `floorId` INTEGER NOT NULL,
    `vehiculeTypeId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vehicule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `licenseNumber` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Vehicule_id_key`(`id`),
    UNIQUE INDEX `Vehicule_licenseNumber_key`(`licenseNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Type_Vehicule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `picture` VARCHAR(191) NOT NULL DEFAULT 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',

    UNIQUE INDEX `Type_Vehicule_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ticket` VARCHAR(191) NOT NULL,
    `entryTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `exitTime` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',
    `slotId` VARCHAR(191) NOT NULL,
    `vehiculeId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Ticket_ticket_key`(`ticket`),
    UNIQUE INDEX `Ticket_slotId_key`(`slotId`),
    UNIQUE INDEX `Ticket_vehiculeId_key`(`vehiculeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Floor` ADD CONSTRAINT `Floor_parkingId_fkey` FOREIGN KEY (`parkingId`) REFERENCES `Parking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Slot` ADD CONSTRAINT `Slot_floorId_fkey` FOREIGN KEY (`floorId`) REFERENCES `Floor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Slot` ADD CONSTRAINT `Slot_vehiculeTypeId_fkey` FOREIGN KEY (`vehiculeTypeId`) REFERENCES `Type_Vehicule`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_slotId_fkey` FOREIGN KEY (`slotId`) REFERENCES `Slot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_vehiculeId_fkey` FOREIGN KEY (`vehiculeId`) REFERENCES `Vehicule`(`licenseNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;
