# in order to run the web app sample 
# you nee to genrate data table and to connect it through the web config

# the schema of the table is 

CREATE TABLE [dbo].[page] (
    [id]          INT           IDENTITY (1, 1) NOT NULL,
    [title]       VARCHAR (50)  NOT NULL,
    [content]     VARCHAR (500) NOT NULL,
    [htmlContent] VARCHAR (500) NOT NULL,
    [create_at]   DATETIME      NULL,
    [nickName]    VARCHAR (20)  NULL,
    [category_id] INT           NOT NULL,
    PRIMARY KEY CLUSTERED ([id] ASC)
);

# the rest are the same for category and items
