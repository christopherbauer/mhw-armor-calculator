begin transaction DKEA

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
		,1
		,8
		,'Dragonking Eyepatch Alpha'
		,'Put this baby on to double your manliness instantly. Ideal for the grittier guys and gals.'
		,70
		,0
		,0
		,0
		,0
		,0)

	declare @ArmorId int = @@IDENTITY

	insert into Armor_Skill (ArmorId, SkillId, Points)
	values (@ArmorId, 8, 2)

	insert into Armor_Slot (ArmorId, SlotId, [Count], IsAugment)
	values (@ArmorId, 2, 1, 0)

rollback transaction DKEA

