CREATE TABLE [dbo].[Armor_Slot] (
    [ArmorId]   INT NOT NULL,
    [SlotId]    INT NOT NULL,
    [Count]     INT NOT NULL,
    [IsAugment] BIT CONSTRAINT [DF_Armor_Slot_IsAugment] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [FK_Armor_Slot_Armor] FOREIGN KEY ([ArmorId]) REFERENCES [dbo].[Armor] ([ArmorId]),
    CONSTRAINT [FK_Armor_Slot_Slot] FOREIGN KEY ([SlotId]) REFERENCES [dbo].[Slot] ([SlotId])
);

