using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TitleApp.Models.DAL;

namespace TitleApp.Models.Repository
{
    public class TitleRepository : Repository<Title>
    {
        public TitleRepository()
            :base()
        {

        }
    }
}