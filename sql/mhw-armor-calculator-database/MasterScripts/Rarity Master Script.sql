begin transaction raritys

	select * from Rarity

	declare @Rarity table (RarityId int, RarityNumber int, Color varchar(50))
	insert into @Rarity (RarityId, RarityNumber, Color)
	values (1, 1, '#ffffff'),
		(2, 2, '#ffffff'),
		(3, 3, 'yellow'),
		(4, 4, 'green'),
		(5, 5, 'green'),
		(6, 6, 'blue'),
		(7, 7, 'purple'),
		(8, 8, 'orange')

	set identity_insert Rarity on

	merge Rarity as t
	using @Rarity as s
	on t.RarityId=s.RarityId
	when matched then
		update set
			t.RarityNumber=s.RarityNumber,
			t.Color=s.Color
	when not matched by target then
		insert (RarityId, RarityNumber, Color)
		values (s.RarityId, s.RarityNumber, s.Color)
	;

	set identity_insert Rarity off

	select * from Rarity

rollback transaction raritys