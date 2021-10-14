-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2021 at 05:59 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tuefri`
--

-- --------------------------------------------------------

--
-- Table structure for table `empsalinfo`
--

CREATE TABLE `empsalinfo` (
  `user_id` int(11) NOT NULL,
  `basicsalary` int(200) NOT NULL,
  `hra` int(200) NOT NULL,
  `lta` int(200) NOT NULL,
  `ma` int(200) NOT NULL,
  `da` int(200) NOT NULL,
  `pf` int(200) NOT NULL,
  `grosspay` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `empsalinfo`
--

INSERT INTO `empsalinfo` (`user_id`, `basicsalary`, `hra`, `lta`, `ma`, `da`, `pf`, `grosspay`) VALUES
(2, 16000, 1600, 800, 320, 1600, 1920, 18400),
(3, 18000, 1800, 900, 360, 1800, 2160, 20700),
(4, 20000, 2000, 1000, 400, 2000, 2400, 23000),
(5, 24000, 2400, 1200, 480, 1500, 1980, 27600),
(6, 30000, 1200, 1500, 500, 2000, 2500, 32700);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `empsalinfo`
--
ALTER TABLE `empsalinfo`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `empsalinfo`
--
ALTER TABLE `empsalinfo`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
