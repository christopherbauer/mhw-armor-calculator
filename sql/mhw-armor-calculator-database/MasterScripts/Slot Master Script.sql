begin transaction slots

	select * from Slot

	declare @slot table (SlotId int, SlotSize int)
	insert into @slot
	values (1, 0), (2, 1),(3, 2),(4, 3)

	set identity_insert Slot on

	merge Slot as t
	using @slot as s
	on s.SlotId = t.SlotId
	when matched then
		update set
			t.SlotSize=s.SlotSize
	when not matched by target then
		insert (SlotId, SlotSize)
		values (s.SlotId, s.SlotSize)
	;

	set identity_insert Slot off

	select * from Slot

rollback transaction slots