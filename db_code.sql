-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024-06-01 23:06:37
-- 伺服器版本： 10.4.32-MariaDB
-- PHP 版本： 8.2.12
GRANT ALL PRIVILEGES ON *.* TO `iim`@`localhost` IDENTIFIED BY PASSWORD '*951527F19014ABEFD0390B1409B4CCA97F86AE1F' WITH GRANT OPTION;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `iim`
--
CREATE DATABASE IF NOT EXISTS `iim` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `iim`;

-- --------------------------------------------------------

--
-- 資料表結構 `book`
--

CREATE TABLE `book` (
  `identity` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `name` text NOT NULL,
  `phone` text NOT NULL,
  `people` int(11) NOT NULL,
  `other` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `book`
--

INSERT INTO `book` (`identity`, `date`, `time`, `name`, `phone`, `people`, `other`) VALUES
(1, '2024-06-04', '01:34:00', '123', '1231', 12, '123'),
(2, '2024-06-05', '03:05:00', '12', '123', 1, '1231'),
(3, '2024-06-05', '02:09:00', '12', '123', 1, '1231'),
(4, '0000-00-00', '00:00:00', '', '', 1, ''),
(5, '2024-05-28', '04:09:00', '123', '213', 4, '21312'),
(6, '0000-00-00', '00:00:00', '', '', 1, ''),
(7, '0000-00-00', '00:00:00', '', '', 1, ''),
(8, '0000-00-00', '00:00:00', '', '', 1, ''),
(9, '0000-00-00', '00:00:00', '', '', 1, ''),
(10, '2024-06-11', '06:13:00', '12231', '21312', 3, '1231');

-- --------------------------------------------------------

--
-- 資料表結構 `money`
--

CREATE TABLE `money` (
  `identity` int(11) NOT NULL,
  `date` date NOT NULL,
  `month` int(11) NOT NULL,
  `week` int(11) NOT NULL,
  `time` time NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `money`
--

INSERT INTO `money` (`identity`, `date`, `month`, `week`, `time`, `price`) VALUES
(1, '2024-05-02', 0, 23, '02:54:00', 2134),
(2, '2024-05-02', 0, 23, '03:30:00', 0),
(3, '2024-05-02', 0, 23, '03:30:00', 0),
(4, '2024-05-02', 0, 23, '03:30:00', 3242342),
(5, '2024-05-02', 0, 23, '03:32:00', 1243),
(6, '2024-05-02', 0, 23, '03:32:00', 123),
(7, '2024-05-02', 0, 23, '03:39:00', 0),
(8, '2024-05-02', 0, 23, '03:40:00', 0),
(9, '2024-05-02', 0, 23, '03:41:00', 741),
(10, '2024-05-02', 5, 23, '03:45:00', 7485),
(11, '2024-05-02', 5, 23, '03:47:00', 0),
(12, '2024-05-02', 5, 23, '03:47:00', 0),
(13, '2024-05-02', 5, 23, '03:47:00', 996),
(14, '2024-05-02', 5, 23, '03:48:00', 7),
(15, '2024-05-02', 5, 23, '03:48:00', 0),
(16, '2024-05-02', 5, 23, '03:49:00', 0),
(17, '2024-05-02', 5, 23, '04:49:00', 774411);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`identity`);

--
-- 資料表索引 `money`
--
ALTER TABLE `money`
  ADD PRIMARY KEY (`identity`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `book`
--
ALTER TABLE `book`
  MODIFY `identity` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `money`
--
ALTER TABLE `money`
  MODIFY `identity` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
