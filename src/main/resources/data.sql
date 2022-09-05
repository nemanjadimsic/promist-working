insert into user (name, email, password, verified) values ('Nemanja', 'nemanjadimsic6@gmail.com', '$2a$10$vqhX/D2vPffHA3KgG0R1XO8OSDbnUEsC3eFkEf/0Suq9w6OJrU5hO',true);
insert into user (name, email, password, verified) values ('Matea-promist1703', 'promistmatea', '$2a$10$dRUPxf15326ul9Q0hrO/eeDISjyxN6FPJihRGibgjdyBqrkA1IIRy',true);
insert into user (name, email, password, verified) values ('Goran-promist013', 'promistgoran', '$2a$10$yYQVTGMNK1VnjgeUg2FRKujP3hURCK1Zn6M6E1pJnaL//G2Xclqv2',true);

INSERT INTO roles(name) VALUES('ROLE_ADMIN');


INSERT INTO user_roles(user_id, role_id) VALUES(1,1);
INSERT INTO user_roles(user_id, role_id) VALUES(2,1);
INSERT INTO user_roles(user_id, role_id) VALUES(3,1);

insert into mesto (ptt_broj, naziv_mesta) values ('21000','Novi Sad');

insert into sluzba(naziv) values ('NSP');
insert into sluzba(naziv) values ('NSR');
insert into sluzba(naziv) values ('VRB');
insert into sluzba(naziv) values ('PAP');
insert into sluzba(naziv) values ('SRK');
insert into sluzba(naziv) values ('NSU');
insert into sluzba(naziv) values ('PAU');

insert into roba_ili_usluga(vrsta) values ('NPK 16:16:16');
insert into roba_ili_usluga(vrsta) values ('NPK 15:15:15');
insert into roba_ili_usluga(vrsta) values ('MAP 12:52');
insert into roba_ili_usluga(vrsta) values ('KCL');
insert into roba_ili_usluga(vrsta) values ('UREA 46%N');
insert into roba_ili_usluga(vrsta) values ('GRANULISANA UREA 46,2%N');
insert into roba_ili_usluga(vrsta) values ('SAN 33%N');
insert into roba_ili_usluga(vrsta) values ('KAN 27%N');
insert into roba_ili_usluga(vrsta) values ('AMONIJUM NITRAT');
insert into roba_ili_usluga(vrsta) values ('NP 20/20');

insert into lot(naziv) values ('L1');
insert into lot(naziv) values ('L2');
insert into lot(naziv) values ('L3');
insert into lot(naziv) values ('L4');
insert into lot(naziv) values ('L5');
insert into lot(naziv) values ('L6');
insert into lot(naziv) values ('L7');
insert into lot(naziv) values ('L8');
insert into lot(naziv) values ('L9');
insert into lot(naziv) values ('L10');
insert into lot(naziv) values ('L11');
insert into lot(naziv) values ('L12');
insert into lot(naziv) values ('L13');
insert into lot(naziv) values ('L14');
insert into lot(naziv) values ('L15');
insert into lot(naziv) values ('L16');
insert into lot(naziv) values ('L17');
insert into lot(naziv) values ('L18');
insert into lot(naziv) values ('L19');
insert into lot(naziv) values ('L20');

insert into pakovanje(vrsta) values ('P25');
insert into pakovanje(vrsta) values ('P50');
insert into pakovanje(vrsta) values ('P500');
insert into pakovanje(vrsta) values ('P600');
insert into pakovanje(vrsta) values ('P1000');
insert into pakovanje(vrsta) values ('PRINFUZ');
insert into pakovanje(vrsta) values ('VANSTANDARDNO');
insert into pakovanje(vrsta) values ('P1000NEEGAL');

insert into marlep (magacin_id, roba_id, lot_id, pakovanje_id)
	SELECT  s.id, r.id, l.id, p.id from sluzba s, roba_ili_usluga r, lot l, pakovanje p;

insert into pasadz (naziv) values ('120*100');
insert into pasadz (naziv) values ('115*95');
insert into pasadz (naziv) values ('strec folija');
insert into pasadz (naziv) values ('50/1');
insert into pasadz (naziv) values ('500/1');
insert into pasadz (naziv) values ('600/1');
insert into pasadz (naziv) values ('1000/1');

insert into crevo (naziv) values ('100 mikrona');
insert into crevo (naziv) values ('120 mikrona');

insert into pam (magacin_id, pasadz_id) select s.id, p.id from sluzba s, pasadz p;

insert into cemer (magacin_id, roba_id, crevo_id) select s.id, r.id, c.id where r.id = '11' from sluzba s, roba_ili_usluga r, crevo c;
