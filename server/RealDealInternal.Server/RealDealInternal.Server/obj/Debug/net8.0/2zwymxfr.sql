BEGIN TRANSACTION;
GO

ALTER TABLE [AspNetRoles] ADD [MainTasks] nvarchar(max) NULL;
GO

ALTER TABLE [AspNetRoles] ADD [Mission] nvarchar(max) NULL;
GO

ALTER TABLE [AspNetRoles] ADD [RoleIcon] nvarchar(max) NULL;
GO

ALTER TABLE [AspNetRoles] ADD [Summary] nvarchar(max) NULL;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20231112095939_more_role_info', N'8.0.0-rc.2.23480.1');
GO

COMMIT;
GO

