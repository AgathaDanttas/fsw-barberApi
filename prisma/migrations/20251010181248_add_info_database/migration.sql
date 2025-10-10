/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Barbershop` table. All the data in the column will be lost.
  - You are about to drop the column `phones` on the `Barbershop` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Barbershop` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `updateAt` to the `Barbershop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "public"."User_email_key";

-- AlterTable
ALTER TABLE "Barbershop" DROP COLUMN "createdAt",
DROP COLUMN "phones",
DROP COLUMN "updatedAt",
ADD COLUMN     "Phones" TEXT[],
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
