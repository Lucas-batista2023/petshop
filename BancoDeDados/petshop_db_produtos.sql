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
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao` text,
  `preco` decimal(10,2) NOT NULL,
  `estoque` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'Ração Premium Canina','Ração para cães adultos de alta qualidade',120.50,50),(2,'Ração Premium Felina','Ração para gatos adultos rica em proteínas',95.00,30),(3,'Coleira Antipulgas','Coleira para controle de pulgas e carrapatos',45.75,20),(4,'Shampoo para Cães','Shampoo dermatológico para pelagem saudável',35.50,40),(5,'Shampoo para Gatos','Shampoo específico para gatos',30.00,25),(6,'Brinquedo para Cães','Brinquedo interativo para cães de todas as idades',25.00,100),(7,'Brinquedo para Gatos','Varinha com penas para diversão felina',15.75,75),(8,'Cama para Pets Pequenos','Cama confortável para pets de pequeno porte',150.00,10),(9,'Cama para Pets Médios','Cama confortável para pets de médio porte',200.00,5),(10,'Arranhador para Gatos','Arranhador com prateleiras e esconderijos',250.00,15),(11,'Guia Retrátil para Cães','Guia retrátil para passeios seguros',60.00,30),(12,'Caixa de Areia para Gatos','Caixa de areia com borda anti-vazamento',80.00,20),(13,'Comedouro Automático','Comedouro com programação de horários',180.00,8),(14,'Biscoito Canino','Petisco natural para cães',20.00,60),(15,'Bolsa de Transporte','Bolsa para transporte de pets pequenos',300.00,12);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
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
