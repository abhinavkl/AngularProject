﻿using System;
using System.Collections.Generic;

namespace AngularProject.Server.Models.Blog;

public partial class Author
{
    public int AuthorId { get; set; }

    public string AuthorName { get; set; }

    public virtual ICollection<Article> Articles { get; set; } = new List<Article>();
}
