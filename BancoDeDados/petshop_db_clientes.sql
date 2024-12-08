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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'João Silva','11987654321','joao.silva@example.com','Rua das Flores, 123'),(2,'Maria Oliveira','21987654321','maria.oliveira@example.com','Avenida Brasil, 456'),(3,'Carlos Santos','31987654321','carlos.santos@example.com','Rua do Campo, 789'),(4,'Ana Costa','41987654321','ana.costa@example.com','Rua das Palmeiras, 101'),(5,'Lucas Pereira','51987654321','lucas.pereira@example.com','Avenida Paulista, 202'),(6,'Sofia Almeida','61987654321','sofia.almeida@example.com','Rua das Rosas, 303'),(7,'Pedro Martins','71987654321','pedro.martins@example.com','Rua dos Lírios, 404'),(8,'Beatriz Lopes','81987654321','beatriz.lopes@example.com','Rua das Hortênsias, 505'),(9,'Gabriel Souza','91987654321','gabriel.souza@example.com','Avenida Central, 606'),(10,'Larissa Ribeiro','10198765432','larissa.ribeiro@example.com','Rua das Magnólias, 707'),(11,'Fernanda Lima','11198765432','fernanda.lima@example.com','Rua do Sol, 808'),(12,'Rafael Ferreira','12198765432','rafael.ferreira@example.com','Rua da Lua, 909'),(13,'Juliana Mendes','13198765432','juliana.mendes@example.com','Avenida Atlântica, 1010'),(14,'Thiago Rocha','14198765432','thiago.rocha@example.com','Rua do Mar, 1111'),(15,'Camila Barbosa','15198765432','camila.barbosa@example.com','Rua das Estrelas, 1212'),(17,'João Silva','11999999999',NULL,'Rua A, 123');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-08  0:51:40
