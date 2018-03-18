begin transaction games

	select * from Game

	declare @Game table (GameId int, [Name] varchar(50))
	insert into @Game (GameId, [Name])
	values (1, 'Monster Hunter World')

	set identity_insert Game on

	merge Game as t
	using @Game as s
	on t.GameId=s.GameId
	when matched then
		update set
			t.[Name] = s.[Name]
	when not matched by target then
		insert (GameId, [Name])
		values (s.GameId, s.[Name])
	;

	set identity_insert Game off

	select * from Game

rollback transaction games