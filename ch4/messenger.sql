create table `users` (
    `id` int not null auto_increment,
    `password` varchar(20) not null,
    `username` varchar(20) not null,
    `profile_image` varchar(50) not null,
    `profile_message` varchar(100) not null,
    `withdraw` tinyint(1) not null default 0,
    `join_date` datetime not null,
    primary key (`id`)
    ) engine=InnoDB default charset=utf8;

create table `channels` (
    `id` int not null auto_increment,
    `name` varchar(20) not null,
    `created_user` int not null,
    `link` varchar(50) not null,
    `capacity` int not null,
    `withdraw` tinyint(1) not null default 0,
    `create_date` datetime not null,
    primary key (`id`),
    foreign key (`created_user`) references `users`(`id`) on delete cascade
    ) engine=InnoDB default charset=utf8;

create table `chats` (
    `id` int not null auto_increment,
    `content` text not null,
    `writer` int not null,
    `channel` int not null,
    `create_date` datetime not null,
    primary key (`id`),
    foreign key (`writer`) references `users`(`id`) on delete cascade,
    foreign key (`channel`) references `channels`(`id`) on delete cascade
    ) engine=InnoDB default charset=utf8;

create table `follows` (
    `id` int not null auto_increment,
    `follower` int not null,
    `followee` int not null,
    `follow_date` datetime not null,
    primary key (`id`),
    foreign key (`follower`) references `users`(`id`) on delete cascade,
    foreign key (`followee`) references `users`(`id`) on delete cascade
    ) engine=InnoDB default charset=utf8;

create table `blocks` (
    `id` int not null auto_increment,
    `set_block` int not null,
    `blocked` int not null,
    `block_date` datetime not null,
    primary key(`id`),
    foreign key (`set_block`) references `users`(`id`) on delete cascade,
    foreign key (`blocked`) references `users`(`id`) on delete cascade
    ) engine=InnoDB default charset=utf8;