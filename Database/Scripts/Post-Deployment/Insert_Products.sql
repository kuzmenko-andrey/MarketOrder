IF NOT EXISTS(SELECT 1 FROM [dbo].[Products])
BEGIN

    INSERT INTO [dbo].[Products] ([Name], [Price])
         VALUES ('Car Organizer', 10.99)
               ,('LEGO Speed Champions', 7.99)
               ,('Panasonic HomeHawk Smart Home Security', 99.99)
END