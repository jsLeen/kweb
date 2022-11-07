-- 1
select users.id, name, seat_number 
from users inner join tickets on users.id = tickets.user 
where train = 11 
order by seat_number;
-- 2
select users.id, name, count(*) as trains_count, sum(distance) / 10 as total_distance 
from trains inner join tickets on trains.id = tickets.train inner join users on users.id = tickets.user 
group by users.id 
order by total_distance desc limit 6;
-- 4
select types.name as type, src.name as src_stn, dst.name as dst_stn, departure, arrival, round(fare_rate * distance / 1000, -2) as fare
from types inner join trains on types.id = trains.type inner join stations as src on src.id = source inner join stations as dst on dst.id = destination
order by departure;
-- 5
select trains.id, types.name as type, src.name as src_stn, dst.name as dst_stn, count(*) as occupied, max_seats as maximun
from trains inner join tickets on trains.id = tickets.train inner join types on trains.type = types.id inner join stations as src on src.id = trains.source inner join stations as dst on dst.id = trains.destination
group by train
order by trains.id;