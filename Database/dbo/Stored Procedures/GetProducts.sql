CREATE PROCEDURE [dbo].[GetProducts]
AS
BEGIN
    SELECT [Id], [Name], [Price] FROM [dbo].[Products]
END