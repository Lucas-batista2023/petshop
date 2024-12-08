CREATE DATABASE  IF NOT EXISTS `petshop_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `petshop_db`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: petshop_db
-- ------------------------------------------------------
-- Server version	5.7.24

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
-- Table structure for table `consultas`
--

DROP TABLE IF EXISTS `consultas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consultas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data` datetime NOT NULL,
  `id_pet` int(11) DEFAULT NULL,
  `id_veterinario` int(11) DEFAULT NULL,
  `observacoes` text,
  PRIMARY KEY (`id`),
  KEY `id_pet` (`id_pet`),
  KEY `id_veterinario` (`id_veterinario`),
  CONSTRAINT `consultas_ibfk_1` FOREIGN KEY (`id_pet`) REFERENCES `pets` (`id`) ON DELETE CASCADE,
  CONSTRAINT `consultas_ibfk_2` FOREIGN KEY (`id_veterinario`) REFERENCES `veterinarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultas`
--

LOCK TABLES `consultas` WRITE;
/*!40000 ALTER TABLE `consultas` DISABLE KEYS */;
INSERT INTO `consultas` VALUES (1,'2024-12-02 10:00:00',1,2,'Consulta de rotina'),(2,'2024-12-03 14:30:00',2,1,'Vacinação anual'),(3,'2024-12-04 09:00:00',3,3,'Exame de check-up'),(4,'2024-12-05 16:00:00',4,4,'Consultoria sobre dieta'),(5,'2024-12-06 11:00:00',5,2,'Tratamento para parasitas'),(6,'2024-12-07 10:30:00',6,1,'Consulta emergencial'),(7,'2024-12-08 12:00:00',7,3,'Verificação de lesão'),(8,'2024-12-09 15:00:00',8,4,'Consulta de rotina'),(9,'2024-12-10 09:30:00',9,2,'Vacinação contra raiva'),(10,'2024-12-11 14:00:00',10,1,'Check-up geral'),(11,'2024-12-12 13:00:00',11,3,'Exame de sangue'),(12,'2024-12-13 08:00:00',12,4,'Consulta de rotina'),(13,'2024-12-14 11:30:00',13,2,'Avaliação cardíaca'),(14,'2024-12-15 10:15:00',14,1,'Consulta pós-cirúrgica'),(15,'2024-12-16 17:00:00',15,3,'Acompanhamento pós-tratamento'),(16,'2024-12-09 00:36:00',10,2,'Consulta');
/*!40000 ALTER TABLE `consultas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-08  0:51:39
