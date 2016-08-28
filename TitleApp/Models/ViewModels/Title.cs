using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TitleApp.Models.ViewModels
{
    [Serializable]
    public class Title
    {
        public int TitleId { get; set; }
        public string TitleName { get; set; }
        public string TitleNameSortable { get; set; }

        public Storyline[] Storylines { get; set; }

        public int? ReleaseYear { get; set; }

        public Title(DAL.Title title)
        {
            TitleId = title.TitleId;
            TitleName = title.TitleName;
            TitleNameSortable = title.TitleNameSortable;
            ReleaseYear = title.ReleaseYear;
            List<Storyline> list = new List<Storyline>();

            foreach(var storyline in title.StoryLines)
            {
                list.Add(new Storyline(storyline));
            }

            Storylines = list.ToArray();
        }
    }
}