declare @ArmorId int = 2

select g.[Name] [GameName], [at].[Name] [ArmorType], r.Color, a.[Name], a.[Description], Defense, VsFire, VsWater, VsThunder, VsIce, VsDragon
from Armor a
	inner join Game g on a.GameId=g.GameId
	inner join ArmorType [at] on a.ArmorTypeId=[at].ArmorTypeId
	inner join Rarity r on a.RarityId=r.RarityId
where
	a.ArmorId = @ArmorId

select s.SlotSize, a_s.[Count]
from Armor_Slot a_s
	inner join Slot s on a_s.SlotId=s.SlotId 
where
	ArmorId=@ArmorId

select s.[Name], s.[Description], a_s.Points, s.MaximumPoints
from Armor_Skill a_s
	inner join Skill s on a_s.SkillId=s.SkillId
where
	ArmorId=@ArmorId