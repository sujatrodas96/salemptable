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
-- Table structure for table `empinfo`
--

CREATE TABLE `empinfo` (
  `user_id` int(11) NOT NULL,
  `empname` varchar(200) NOT NULL,
  `emploc` varchar(200) NOT NULL,
  `empph` bigint(200) NOT NULL,
  `empdept` varchar(200) NOT NULL,
  `empdesig` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `empinfo`
--

INSERT INTO `empinfo` (`user_id`, `empname`, `emploc`, `empph`, `empdept`, `empdesig`) VALUES
(1, 'shajan', 'khardah', 8240464678, 'developer', 'php developer'),
(2, 'sayan', 'newtown', 8961423568, 'backoffice', 'computer operator'),
(3, 'soham', 'kolkata', 8240464677, 'IT', 'developer'),
(5, 'rajen', 'narkelbagan', 8961123456, 'engineer', 'site engineer'),
(6, 'rahaman', 'kolkata', 8981456789, 'IT', 'hardware engineer'),
(7, 'rahaman', 'kolkata', 8981056784, 'IT', 'software engineer'),
(8, 'akash', 'khardah', 8240123456, 'it', 'software engineer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `empinfo`
--
ALTER TABLE `empinfo`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `empinfo`
--
ALTER TABLE `empinfo`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
