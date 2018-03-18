CREATE TABLE [dbo].[Armor] (
    [ArmorId]     INT            IDENTITY (1, 1) NOT NULL,
    [GameId]      INT            NOT NULL,
    [ArmorTypeId] INT            NOT NULL,
    [RarityId]    INT            NOT NULL,
    [Name]        NVARCHAR (50)  NOT NULL,
    [Description] NVARCHAR (100) NOT NULL,
    [Defense]     INT            NOT NULL,
    [VsFire]      INT            NOT NULL,
    [VsWater]     INT            NOT NULL,
    [VsThunder]   INT            NOT NULL,
    [VsIce]       INT            NOT NULL,
    [VsDragon]    INT            NOT NULL,
    CONSTRAINT [PK_Armor] PRIMARY KEY CLUSTERED ([ArmorId] ASC),
    CONSTRAINT [FK_Armor_ArmorType] FOREIGN KEY ([ArmorTypeId]) REFERENCES [dbo].[ArmorType] ([ArmorTypeId]),
    CONSTRAINT [FK_Armor_Game] FOREIGN KEY ([GameId]) REFERENCES [dbo].[Game] ([GameId]),
    CONSTRAINT [FK_Armor_Rarity] FOREIGN KEY ([RarityId]) REFERENCES [dbo].[Rarity] ([RarityId])
);





