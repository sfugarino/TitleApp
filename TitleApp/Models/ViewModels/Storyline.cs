using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TitleApp.Models.ViewModels
{
    [Serializable]
    public class Storyline
    {
        public string Language { get; set; }

        public string Description { get; set; }

        public int Id { get; set; }

        public Storyline(DAL.StoryLine storyLine)
        {
            Id = storyLine.Id;
            Language = storyLine.Language;
            Description = storyLine.Description;
        }

    }
}