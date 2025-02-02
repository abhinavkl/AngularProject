﻿using System;
using System.Collections.Generic;

namespace BlogApplication.Server.Models.Blog;

public partial class Article
{
    public int ArticleId { get; set; }

    public string Title { get; set; }

    public int AuthorId { get; set; }

    public string Content { get; set; }

    public string Url { get; set; }

    public DateOnly PublishedOn { get; set; }

    public virtual ICollection<ArticleCategory> ArticleCategories { get; set; } = new List<ArticleCategory>();

    public virtual Author Author { get; set; }

    public virtual ICollection<UserArticleLike> UserArticleLikes { get; set; } = new List<UserArticleLike>();

    public virtual ICollection<UserArticlePin> UserArticlePins { get; set; } = new List<UserArticlePin>();
}
