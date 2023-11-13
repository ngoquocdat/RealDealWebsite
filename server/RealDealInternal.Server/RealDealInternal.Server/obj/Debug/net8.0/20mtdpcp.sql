IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Medias] (
    [Id] uniqueidentifier NOT NULL,
    [MediaName] nvarchar(max) NOT NULL,
    [MediaUrl] nvarchar(max) NOT NULL,
    [TimeUpload] datetime2 NOT NULL,
    [Type] int NOT NULL,
    CONSTRAINT [PK_Medias] PRIMARY KEY ([Id])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20231112151428_initial_migration', N'8.0.0-rc.2.23480.1');
GO

COMMIT;
GO

