create table `students` (
    `id` int not null auto_increment,
    `name` varchar(20) not null,
    `addmission_year` int not null,
    `major` varchar(20) not null,
    `personal_no` int not null,
    `phone_num` varchar(15) not null,
    `address` varchar(50) not null,
    `total_credit` int not null default 0,
    `ave_credit` double not null default 0.0,
    `status` tinyint(1) not null default 1,
    primary key (`id`)
    ) engine=InnoDB default charset=utf8;