CREATE TABLE [dbo].[Slot] (
    [SlotId]   INT IDENTITY (1, 1) NOT NULL,
    [SlotSize] INT NOT NULL,
    CONSTRAINT [PK_Slot] PRIMARY KEY CLUSTERED ([SlotId] ASC)
);

