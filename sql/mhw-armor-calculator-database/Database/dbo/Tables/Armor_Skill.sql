CREATE TABLE [dbo].[Armor_Skill] (
    [ArmorId] INT NOT NULL,
    [SkillId] INT NOT NULL,
    [Points]  INT NOT NULL,
    CONSTRAINT [FK_ArmorSkill_Armor] FOREIGN KEY ([ArmorId]) REFERENCES [dbo].[Armor] ([ArmorId]),
    CONSTRAINT [FK_ArmorSkill_Skill] FOREIGN KEY ([SkillId]) REFERENCES [dbo].[Skill] ([SkillId])
);

