namespace TitleApp.Models.DAL
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("StoryLine")]
    public partial class StoryLine
    {
        public int TitleId { get; set; }

        [StringLength(100)]
        public string Type { get; set; }

        [StringLength(100)]
        public string Language { get; set; }

        [Column(TypeName = "ntext")]
        public string Description { get; set; }

        public int Id { get; set; }

        public virtual Title Title { get; set; }
    }
}
