-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: tp_final
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(120) COLLATE utf8mb4_general_ci NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int NOT NULL DEFAULT '0',
  `imagen` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (9,'Notebook Lenovo',450.00,20,NULL),(2,'Auriculares Gamer',25000.00,15,'https://static.bidcom.com.ar/publicacionesML/productos/ABLUE103/1000x1000-ABLUE103.jpg'),(3,'Impresora HP LaserJet',120000.00,6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1C854P3BjAKIqJ-0yDpZPYCN17YIF8XCtew&s'),(4,'Gabinete ATX',60000.00,12,'https://fullh4rd.com.ar/img/productos/6/gabinete-asus-prime-ap201-microatx-negro-1.jpg'),(5,'SSD 1TB Samsung',80000.00,20,'https://katech.com.ar/wp-content/uploads/DIS434-jpg.webp'),(6,'Teclado Mecánico RGB',35000.00,25,'https://http2.mlstatic.com/D_NQ_NP_602974-MLA79990137195_102024-O.webp'),(7,'Mouse Inalámbrico Logitech',15000.00,32,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zXDnIgH7Bi9qrXThL6Tm-QBgXRKIC8YP_A&s'),(8,'Monitor LG 27\"',220000.00,10,'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_42541_Monitor_Gamer_LG_UltraGear_27GS60F-B_27__FHD_IPS_180Hz_G-Sync_Freesync___efbd8838-grn.jpg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-31  0:13:12
