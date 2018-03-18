CREATE TABLE [dbo].[ArmorType] (
    [ArmorTypeId] INT          IDENTITY (1, 1) NOT NULL,
    [Name]        VARCHAR (50) NOT NULL,
    CONSTRAINT [PK_ArmorType] PRIMARY KEY CLUSTERED ([ArmorTypeId] ASC)
);

