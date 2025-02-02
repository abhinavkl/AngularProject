﻿using System.ComponentModel.DataAnnotations.Schema;

namespace BlogApplication.Server.Models.Blog
{
    public partial class UserCategory
    {
        [NotMapped]
        public bool IsFollowing { get; set; }
        [NotMapped]
        public virtual User User { get; set; }
    }
}
