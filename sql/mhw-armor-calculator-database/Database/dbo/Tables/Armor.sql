CREATE TABLE [dbo].[Armor] (
    [ArmorId]     INT            IDENTITY (1, 1) NOT NULL,
    [GameId]      INT            NOT NULL,
    [Name]        NVARCHAR (50)  NOT NULL,
    [Description] NVARCHAR (100) NOT NULL,
    CONSTRAINT [PK_Armor] PRIMARY KEY CLUSTERED ([ArmorId] ASC),
    CONSTRAINT [FK_Armor_Game1] FOREIGN KEY ([GameId]) REFERENCES [dbo].[Game] ([GameId])
);

