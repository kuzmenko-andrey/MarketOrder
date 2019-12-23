CREATE TABLE [dbo].[Products]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY(1, 1), 
    [Name] VARCHAR(255) NOT NULL, 
    [Price] MONEY NOT NULL
)

GO

CREATE INDEX [Id_Products_Column] ON [dbo].[Products] ([Id])
