CREATE TABLE [dbo].[Rarity] (
    [RarityId]     INT          IDENTITY (1, 1) NOT NULL,
    [RarityNumber] INT          NOT NULL,
    [Color]        VARCHAR (50) NOT NULL,
    CONSTRAINT [PK_Rarity] PRIMARY KEY CLUSTERED ([RarityId] ASC)
);

