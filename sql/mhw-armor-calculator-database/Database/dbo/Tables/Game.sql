CREATE TABLE [dbo].[Game] (
    [GameId] INT          IDENTITY (1, 1) NOT NULL,
    [Name]   VARCHAR (50) NOT NULL,
    CONSTRAINT [PK_Game] PRIMARY KEY CLUSTERED ([GameId] ASC)
);

