begin transaction armortypes

	select * from ArmorType

	declare @armortype table (ArmorTypeId int, [Name] varchar(50))
	insert into @armortype
	values 
		(1, 'Head'), 
		(2, 'Chest'),
		(3, 'Arms'),
		(4, 'Waist'),
		(5, 'Legs')

	set identity_insert ArmorType on

	merge ArmorType as t
	using @armortype as s
	on s.ArmorTypeId = t.ArmorTypeId
	when matched then
		update set
			t.[Name]=s.[Name]
	when not matched by target then
		insert (ArmorTypeId, [Name])
		values (s.ArmorTypeId, s.[Name])
	;

	set identity_insert ArmorType off

	select * from ArmorType

rollback transaction armortypes