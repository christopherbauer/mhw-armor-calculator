begin transaction skills

	select * from Skill

	declare @skill table (SkillId int, [Name] varchar(50), [Description] varchar(100), MaximumPoints int)
	insert into @skill
	values 
		(1, 'Blast Resistance', 'Don''t blow up yo.', 3),
		(2, 'Blight Resistance', 'Don''t throw up yo.', 3),
		(3, 'Bleeding Resistance', 'Don''t bleed out yo.', 3),
		(4, 'Flinch Free', 'Don''t flinch.', 3),
		(5, 'Guard', 'Don''t flinch.', 5),
		(6, 'Special Ammo Boost', 'Blow stuff up yo.', 1),
		(7, 'Speed Sharpening', 'Be Hatashi Hanzo.', 3),
		(8, 'Weakness Exploit', 'Increases the affinity of attacks that exploit a monsters weak spot.', 3)


	set identity_insert Skill on

	merge Skill as t
	using @skill as s
	on s.SkillId = t.SkillId
	when matched then
		update set
			t.[Name] = s.[Name]
			, t.[Description] = s.[Description]
			, t.MaximumPoints = s.MaximumPoints
	when not matched by target then
		insert (SkillId, [Name], [Description], MaximumPoints)
		values (s.SkillId, s.[Name], s.[Description], MaximumPoints)
	;

	set identity_insert Skill off

	select * from Skill

rollback transaction skills