begin transaction OMB

	INSERT INTO [dbo].[Armor]
		([GameId]
		,[ArmorTypeId]
		,[RarityId]
		,[Name]
		,[Description]
		,[Defense]
		,[VsFire]
		,[VsWater]
		,[VsThunder]
		,[VsIce]
		,[VsDragon]
		)
	VALUES
		(1
		,2
		,6
		,'Odogaron Mail Beta'
		,'Sharpen stuff. Fastly.'
		,54
		,2
		,2
		,-2
		,-3
		,0)

	declare @ArmorId int = @@IDENTITY

	insert into Armor_Skill (ArmorId, SkillId, Points)
	values (@ArmorId, 7, 2)

	insert into Armor_Slot (ArmorId, SlotId, [Count], IsAugment)
	values (@ArmorId, 1, 1, 0)

rollback transaction OMB

