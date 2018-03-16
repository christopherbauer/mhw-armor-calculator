CREATE TABLE [dbo].[Skill] (
    [SkillId]       INT            IDENTITY (1, 1) NOT NULL,
    [Name]          NVARCHAR (50)  NOT NULL,
    [Description]   NVARCHAR (100) NOT NULL,
    [MaximumPoints] INT            NOT NULL,
    CONSTRAINT [PK_Skill] PRIMARY KEY CLUSTERED ([SkillId] ASC)
);

